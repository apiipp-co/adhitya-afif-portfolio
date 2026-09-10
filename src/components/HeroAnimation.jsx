import { useEffect, useRef, useState, lazy, Suspense } from "react";

const Lanyard = lazy(() => import("./Lanyard"));

const FRAME_COUNT = 214;

const localFrame = (index) =>
  `/frames/frame_${index.toString().padStart(5, "0")}.webp`;

export default function HeroAnimation() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctaRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedFlagsRef = useRef(new Array(FRAME_COUNT + 1).fill(false));
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const lastDrawnFrameRef = useRef(-1);
  const animFrameIdRef = useRef(null);
  const isLoopRunningRef = useRef(false);

  const [showLanyard, setShowLanyard] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const hasTriggeredLockRef = useRef(false);

  // 1-second scroll pause when last frame & lanyard appear
  useEffect(() => {
    if (!isLocked) return;

    const preventScrollDown = (e) => {
      if (e.deltaY > 0) {
        e.preventDefault();
      }
    };

    let startTouchY = 0;
    const handleTouchStart = (e) => {
      startTouchY = e.touches[0]?.clientY || 0;
    };
    const handleTouchMove = (e) => {
      const currentY = e.touches[0]?.clientY || 0;
      if (startTouchY - currentY > 0) {
        // Swiping up to scroll down
        e.preventDefault();
      }
    };

    const handleKeyDown = (e) => {
      if (["ArrowDown", "PageDown", "Space", " "].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScrollDown, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    if (window.lenis) window.lenis.stop();

    const timeout = setTimeout(() => {
      setIsLocked(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (window.lenis) window.lenis.start();
      window.removeEventListener("wheel", preventScrollDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    const scrollContainer = containerRef.current;
    const cta = ctaRef.current;

    canvas.width = 1280;
    canvas.height = 720;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    // Pre-fill canvas with lego dot background color immediately
    context.fillStyle = "#fbf9f8";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const images = new Array(FRAME_COUNT + 1);
    imagesRef.current = images;

    const drawFrame = (frameNum) => {
      const clamped = Math.max(1, Math.min(FRAME_COUNT, frameNum));
      if (lastDrawnFrameRef.current === clamped && images[clamped]?.complete) return;

      const img = images[clamped];

      if (img && img.complete && img.naturalWidth > 0) {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        lastDrawnFrameRef.current = clamped;
      } else {
        // Find nearest loaded frame within bounded range for speed
        const maxSearch = 20;
        for (let offset = 1; offset <= maxSearch; offset++) {
          const prev = clamped - offset;
          const next = clamped + offset;
          if (
            prev >= 1 &&
            images[prev]?.complete &&
            images[prev]?.naturalWidth > 0
          ) {
            context.drawImage(images[prev], 0, 0, canvas.width, canvas.height);
            lastDrawnFrameRef.current = prev;
            break;
          }
          if (
            next <= FRAME_COUNT &&
            images[next]?.complete &&
            images[next]?.naturalWidth > 0
          ) {
            context.drawImage(images[next], 0, 0, canvas.width, canvas.height);
            lastDrawnFrameRef.current = next;
            break;
          }
        }
      }
    };

    // Prioritized frame loader
    const loadFrame = (index, highPriority = false) => {
      if (index < 1 || index > FRAME_COUNT || images[index]) return;

      const img = new Image();
      if (highPriority && "fetchPriority" in img) {
        img.fetchPriority = "high";
      }
      img.src = localFrame(index);

      img.onload = () => {
        images[index] = img;
        loadedFlagsRef.current[index] = true;
        if (index === 1 && lastDrawnFrameRef.current === -1) {
          drawFrame(1);
        }
        if (Math.round(currentFrameRef.current) === index) {
          drawFrame(index);
        }
      };

      images[index] = img;
    };

    // 1. Immediate Critical Phase: Load first frames and LAST frames immediately!
    const criticalFrames = [1, 2, 3, 4, 5, 205, 208, 210, 211, 212, 213, 214];
    criticalFrames.forEach((idx) => loadFrame(idx, true));

    // 2. Decimated Keyframes Phase: Load every 5th frame for instant smooth seeking
    for (let i = 10; i < FRAME_COUNT; i += 5) {
      loadFrame(i, false);
    }

    // 3. Background Fill Phase: Fill all remaining frames using idle callback
    let bgIndex = 1;
    const loadNextBatch = () => {
      const end = Math.min(FRAME_COUNT, bgIndex + 10);
      for (let i = bgIndex; i <= end; i++) {
        loadFrame(i, false);
      }
      bgIndex = end + 1;
      if (bgIndex <= FRAME_COUNT) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(loadNextBatch);
        } else {
          setTimeout(loadNextBatch, 30);
        }
      }
    };
    loadNextBatch();

    // On-demand render loop (sleeps when idle to save CPU/GPU)
    const updateLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.45;
        const target = Math.round(currentFrameRef.current);
        drawFrame(target);

        // Preload immediate adjacent frames on the fly
        for (let offset = -3; offset <= 3; offset++) {
          const adj = target + offset;
          if (adj >= 1 && adj <= FRAME_COUNT) {
            loadFrame(adj, true);
          }
        }

        animFrameIdRef.current = requestAnimationFrame(updateLoop);
      } else {
        if (currentFrameRef.current !== targetFrameRef.current) {
          currentFrameRef.current = targetFrameRef.current;
          drawFrame(Math.round(currentFrameRef.current));
        }
        isLoopRunningRef.current = false;
      }
    };

    const requestUpdate = () => {
      if (!isLoopRunningRef.current) {
        isLoopRunningRef.current = true;
        animFrameIdRef.current = requestAnimationFrame(updateLoop);
      }
    };

    requestUpdate();

    const handleScroll = () => {
      if (!scrollContainer) return;
      const rect = scrollContainer.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      let scrollFraction = 0;
      if (totalScrollable > 0) {
        scrollFraction = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      }

      // Map scroll 0.00 -> 0.88 smoothly to frames 1 -> 214
      let frameIndex = 1;
      if (scrollFraction <= 0.88) {
        frameIndex =
          1 + Math.floor((scrollFraction / 0.88) * (FRAME_COUNT - 1));
      } else {
        frameIndex = FRAME_COUNT;
      }

      if (targetFrameRef.current !== frameIndex) {
        targetFrameRef.current = frameIndex;
        requestUpdate();
      }

      // Show lanyard earlier (from frame 140 / scroll >= 0.55) with falling-down animation from under navbar
      if (frameIndex >= 140 || scrollFraction >= 0.55) {
        setShowLanyard(true);
      } else {
        setShowLanyard(false);
        if (scrollFraction < 0.35) {
          hasTriggeredLockRef.current = false;
        }
      }

      // When reaching the last frame, pause scroll for 1 second so lanyard can be viewed/interacted
      if (frameIndex === FRAME_COUNT && !hasTriggeredLockRef.current) {
        hasTriggeredLockRef.current = true;
        currentFrameRef.current = FRAME_COUNT;
        drawFrame(FRAME_COUNT);
        setIsLocked(true);
      }

      if (cta) {
        if (scrollFraction > 0.03) {
          cta.style.opacity = Math.max(0, 1 - scrollFraction * 8);
          cta.style.pointerEvents = "none";
        } else {
          cta.style.opacity = "1";
          cta.style.pointerEvents = "auto";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      isLoopRunningRef.current = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="h-[300vh] w-full relative z-40 lego-dot-bg"
      ref={containerRef}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center lego-dot-bg">
        {/* Canvas background frame animation */}
        <canvas
          className="w-full h-full object-cover object-center pointer-events-none translate-y-8 md:translate-y-12"
          ref={canvasRef}
        />

        {/* React Bits 3D Interactive Lanyard with falling-down entry animation from navbar */}
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center transition-all duration-350 ease-out ${
            showLanyard
              ? "opacity-100 translate-y-8 md:translate-y-12 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-36 scale-95 pointer-events-none"
          }`}
        >
          {showLanyard && (
            <Suspense fallback={null}>
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -60, 0]}
                imageFit="cover"
                lanyardWidth={1}
              />
            </Suspense>
          )}
        </div>

        {/* CTA */}
        <div
          className="absolute bottom-10 md:bottom-12 flex flex-col items-center gap-4 transition-opacity duration-300 pointer-events-none"
          ref={ctaRef}
        >
          <span className="font-label-caps text-label-caps font-bold bg-white px-6 py-3 border-4 border-on-surface brick-shadow uppercase text-on-surface">
            Scroll to Build
          </span>
          <div className="w-8 h-8 border-4 border-on-surface bg-white brick-shadow flex items-center justify-center animate-bounce">
            <span className="material-symbols-outlined text-primary text-[18px]">
              arrow_downward
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
