import { useEffect, useRef, useState, useCallback } from "react";

// Car designs and themes
const CAR_PRESETS = [
  {
    id: "racer",
    name: "Red Racer",
    primary: "#e52521", // Classic Lego Red
    secondary: "#ffd700", // Lego Yellow
    accent: "#ffffff",
    spoiler: "#1a1c1c",
    number: "7",
    roofText: "",
    glowColor: "rgba(255, 215, 0, 0.4)",
    flair: "🏎️",
    hornFreq: [440, 554, 659], // A chord
  },
  {
    id: "taxi",
    name: "City Taxi",
    primary: "#ffcc00", // Lego Taxi Yellow
    secondary: "#1a1c1c", // Black
    accent: "#ffffff",
    spoiler: "#ffcc00",
    number: "TAXI",
    roofText: "TAXI",
    glowColor: "rgba(255, 204, 0, 0.45)",
    flair: "🚕",
    hornFreq: [392, 523], // Beep beep
  },
  {
    id: "police",
    name: "Police Cruiser",
    primary: "#0055a4", // Lego Blue
    secondary: "#ffffff", // White
    accent: "#1a1c1c",
    spoiler: "#0055a4",
    number: "POLICE",
    roofText: "POLICE",
    glowColor: "rgba(0, 140, 255, 0.5)",
    flair: "🚓",
    hornFreq: [600, 800, 600, 800], // Siren chirps
  },
  {
    id: "turbo-green",
    name: "Speed Green",
    primary: "#00a651", // Lego Green
    secondary: "#10b981", // Bright Emerald
    accent: "#ffd700",
    spoiler: "#1a1c1c",
    number: "99",
    roofText: "",
    glowColor: "rgba(0, 255, 128, 0.45)",
    flair: "🏎️💨",
    hornFreq: [523, 659, 784], // High fanfare
  },
];

const SPEECH_MESSAGES = [
  "BEEP BEEP! 🚗",
  "VROOM! 🏎️💨",
  "BRICK POWER! 🧱",
  "TURBO BOOST! ⚡",
  "ADHITYA RACING! 🏆",
  "HONK HONK! 📢",
];

// Lightweight web audio sound synthesizer (zero external assets needed)
function playCarAudio(frequencies = [440, 554], type = "horn") {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === "horn") {
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16 + idx * 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + 0.18 + idx * 0.04);
      });
    } else if (type === "turbo") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch {
    // Graceful fallback if autoplay policy or browser restriction prevents audio
  }
}

export default function LegoCarOrbit({ targetRef }) {
  const [carIndex, setCarIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTurbo, setIsTurbo] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(null);
  const [particles, setParticles] = useState([]);

  // Track offset 6px keeps car centered right along the border edge
  const trackOffset = 4;

  const carPosRef = useRef({ x: 0, y: 0, angle: 0, progress: 0 });
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const particleIdCounterRef = useRef(0);
  const speechTimeoutRef = useRef(null);
  const turboTimeoutRef = useRef(null);
  const carElemRef = useRef(null);

  const [boxDimensions, setBoxDimensions] = useState({
    width: 380,
    height: 380,
    left: 0,
    top: 0,
  });

  const currentCar = CAR_PRESETS[carIndex];

  // Measure target container size & position responsively
  useEffect(() => {
    const updateDimensions = () => {
      const target = targetRef?.current;
      if (!target) return;

      const rect = target.getBoundingClientRect();

      // Position relative to parent container
      const left = target.offsetLeft || 0;
      const top = target.offsetTop || 0;
      const width = target.offsetWidth || rect.width || 380;
      const height = target.offsetHeight || rect.height || 380;

      setBoxDimensions({ left, top, width, height });
    };

    updateDimensions();

    const target = targetRef?.current;
    let observer;
    if (target && "ResizeObserver" in window) {
      observer = new ResizeObserver(updateDimensions);
      observer.observe(target);
    }

    window.addEventListener("resize", updateDimensions);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, [targetRef]);

  // Handle Click on Lego Car (Switches Car + Turbo Boost + Honk + Speech Bubble)
  const triggerCarInteraction = useCallback(
    (e) => {
      if (e) e.stopPropagation();

      // Switch to next car preset
      const nextIndex = (carIndex + 1) % CAR_PRESETS.length;
      setCarIndex(nextIndex);
      const nextCar = CAR_PRESETS[nextIndex];

      // Trigger Turbo boost for 2.2 seconds
      setIsTurbo(true);
      if (turboTimeoutRef.current) clearTimeout(turboTimeoutRef.current);
      turboTimeoutRef.current = setTimeout(() => {
        setIsTurbo(false);
      }, 2200);

      // Play audio
      playCarAudio(nextCar.hornFreq, "turbo");

      // Show playful speech bubble with new car name
      const customMsg = `${nextCar.flair} ${nextCar.name}!`;
      setSpeechBubble(customMsg);

      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => {
        setSpeechBubble(null);
      }, 2000);
    },
    [carIndex]
  );

  // Main Animation Loop
  useEffect(() => {
    let lastParticleTime = 0;

    const animate = (currentTime) => {
      const delta = Math.min(64, currentTime - lastTimeRef.current); // cap delta for stability
      lastTimeRef.current = currentTime;

      const { left, top, width, height } = boxDimensions;
      const offset = trackOffset;
      // R for sharp square Lego box corner turns
      const R = 8;

      // Corner centers
      const cTL = { x: left - offset + R, y: top - offset + R };
      const cTR = { x: left + width + offset - R, y: top - offset + R };
      const cBR = { x: left + width + offset - R, y: top + height + offset - R };
      const cBL = { x: left - offset + R, y: top + height + offset - R };

      // Segment lengths
      const lTop = Math.max(10, cTR.x - cTL.x);
      const lRight = Math.max(10, cBR.y - cTR.y);
      const lBottom = Math.max(10, cBR.x - cBL.x);
      const lLeft = Math.max(10, cBL.y - cTL.y);
      const lArc = (Math.PI / 2) * R;

      const totalPerimeter = lTop + lArc + lRight + lArc + lBottom + lArc + lLeft + lArc;

      // Base speed calculation (pixels per second)
      let speed = 110;
      if (isTurbo) speed = 300;
      else if (isHovered) speed = 165;

      const distanceDelta = (speed * delta) / 1000;
      const progressDelta = distanceDelta / totalPerimeter;

      let p = (carPosRef.current.progress + progressDelta) % 1;
      carPosRef.current.progress = p;

      const s = p * totalPerimeter;

      let x = 0;
      let y = 0;
      let angle = 0;

      // Segment 1: Top edge (Left to Right)
      const p1 = lTop;
      const p2 = p1 + lArc;
      const p3 = p2 + lRight;
      const p4 = p3 + lArc;
      const p5 = p4 + lBottom;
      const p6 = p5 + lArc;
      const p7 = p6 + lLeft;

      if (s < p1) {
        const u = s / lTop;
        x = cTL.x + u * (cTR.x - cTL.x);
        y = top - offset;
        angle = 0;
      }
      // Segment 2: Top-Right Corner Arc (0 -> 90 deg)
      else if (s < p2) {
        const a = ((s - p1) / lArc) * (Math.PI / 2);
        x = cTR.x + R * Math.sin(a);
        y = cTR.y - R * Math.cos(a);
        angle = (a * 180) / Math.PI;
      }
      // Segment 3: Right edge (Top to Bottom)
      else if (s < p3) {
        const u = (s - p2) / lRight;
        x = left + width + offset;
        y = cTR.y + u * (cBR.y - cTR.y);
        angle = 90;
      }
      // Segment 4: Bottom-Right Corner Arc (90 -> 180 deg)
      else if (s < p4) {
        const a = ((s - p3) / lArc) * (Math.PI / 2);
        x = cBR.x + R * Math.cos(a);
        y = cBR.y + R * Math.sin(a);
        angle = 90 + (a * 180) / Math.PI;
      }
      // Segment 5: Bottom edge (Right to Left)
      else if (s < p5) {
        const u = (s - p4) / lBottom;
        x = cBR.x - u * (cBR.x - cBL.x);
        y = top + height + offset;
        angle = 180;
      }
      // Segment 6: Bottom-Left Corner Arc (180 -> 270 deg)
      else if (s < p6) {
        const a = ((s - p5) / lArc) * (Math.PI / 2);
        x = cBL.x - R * Math.sin(a);
        y = cBL.y + R * Math.cos(a);
        angle = 180 + (a * 180) / Math.PI;
      }
      // Segment 7: Left edge (Bottom to Top)
      else if (s < p7) {
        const u = (s - p6) / lLeft;
        x = left - offset;
        y = cBL.y - u * (cBL.y - cTL.y);
        angle = 270;
      }
      // Segment 8: Top-Left Corner Arc (270 -> 360/0 deg)
      else {
        const a = ((s - p7) / lArc) * (Math.PI / 2);
        x = cTL.x - R * Math.cos(a);
        y = cTL.y - R * Math.sin(a);
        angle = 270 + (a * 180) / Math.PI;
      }

      carPosRef.current = { x, y, angle, progress: p };

      // Apply transform directly to DOM element for max 60+ FPS performance
      if (carElemRef.current) {
        carElemRef.current.style.transform = `translate3d(${x}px, ${y}px, 0px) translate(-50%, -50%) rotate(${angle}deg)`;
      }

      // Spawn exhaust smoke / turbo flames
      const particleInterval = isTurbo ? 45 : isHovered ? 90 : 150;
      if (currentTime - lastParticleTime > particleInterval) {
        lastParticleTime = currentTime;

        // Exhaust position at rear of the car
        const rad = (angle * Math.PI) / 180;
        const rearOffset = 30; // distance from center to back bumper
        const pX = x - Math.cos(rad) * rearOffset + (Math.random() * 4 - 2);
        const pY = y - Math.sin(rad) * rearOffset + (Math.random() * 4 - 2);

        const newId = ++particleIdCounterRef.current;
        const isFlame = isTurbo && Math.random() > 0.3;

        setParticles((prev) => {
          const updated = prev
            .filter((pt) => currentTime - pt.createdAt < (pt.isFlame ? 400 : 600))
            .map((pt) => {
              const age = (currentTime - pt.createdAt) / (pt.isFlame ? 400 : 600);
              return {
                ...pt,
                size: pt.initialSize + age * (pt.isFlame ? 8 : 14),
                opacity: (1 - age) * 0.8,
              };
            });

          return [
            ...updated.slice(-12),
            {
              id: newId,
              x: pX,
              y: pY,
              createdAt: currentTime,
              initialSize: isFlame ? 5 : 4,
              size: isFlame ? 5 : 4,
              opacity: 0.8,
              isFlame,
            },
          ];
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [boxDimensions, trackOffset, isHovered, isTurbo]);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 select-none overflow-visible"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Exhaust Smoke & Turbo Flame Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isFlame
              ? p.size < 8
                ? "#ffd700"
                : "#ff4500"
              : "#cbd5e1",
            opacity: p.opacity,
            border: p.isFlame ? "1px solid #e11d48" : "1px solid #64748b",
            boxShadow: p.isFlame
              ? "0 0 6px #ff4500"
              : "0 0 2px rgba(0,0,0,0.15)",
            zIndex: 18,
          }}
        />
      ))}

      {/* Lego Car Vehicle Element */}
      <div
        ref={carElemRef}
        onClick={triggerCarInteraction}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute top-0 left-0 pointer-events-auto cursor-pointer group will-change-transform z-30"
        style={{
          width: "72px",
          height: "42px",
          touchAction: "manipulation",
        }}
        title="🏎️ Tap/Click to Honk & Turbo!"
      >
        {/* Comic Speech Bubble (Honk / Message) */}
        {speechBubble && (
          <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-white text-on-surface border-2 border-on-surface px-2.5 py-0.5 font-label-caps font-bold text-[10px] shadow-[2px_2px_0px_0px_#1a1c1c] whitespace-nowrap animate-bounce z-50 rounded">
            <span className="text-primary">{speechBubble}</span>
            {/* Bubble arrow */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-on-surface" />
          </div>
        )}

        {/* The SVG Lego Car (Facing Right at 0 deg) */}
        <svg
          viewBox="0 0 78 46"
          className="w-full h-full overflow-visible transition-transform duration-150 group-hover:scale-110 active:scale-95"
          style={{
            filter: "drop-shadow(2px 3px 0px rgba(26,28,28,0.9))",
          }}
        >
          <defs>
            {/* Headlight Beam Gradient */}
            <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff59d" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#ffee58" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fff9c4" stopOpacity="0" />
            </linearGradient>

            {/* Glass Windshield Gradient */}
            <linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Lego Stud 3D Top Highlight */}
            <linearGradient id="studBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
            </linearGradient>
          </defs>

          {/* Glowing Headlight Cones (projecting forward to the right) */}
          <g className="headlights-beam opacity-85">
            <polygon
              points="70,11 125,-4 125,20 70,17"
              fill="url(#headlightBeam)"
              className="animate-pulse"
            />
            <polygon
              points="70,29 125,26 125,50 70,35"
              fill="url(#headlightBeam)"
              className="animate-pulse"
            />
          </g>

          {/* 4 Lego Rubber Wheels & Hubcaps */}
          <rect
            x="48"
            y="1"
            width="17"
            height="8"
            rx="2.5"
            fill="#111827"
            stroke="#1a1c1c"
            strokeWidth="2"
          />
          <circle cx="56.5" cy="5" r="2.2" fill={currentCar.secondary} stroke="#1a1c1c" strokeWidth="1" />

          <rect
            x="48"
            y="37"
            width="17"
            height="8"
            rx="2.5"
            fill="#111827"
            stroke="#1a1c1c"
            strokeWidth="2"
          />
          <circle cx="56.5" cy="41" r="2.2" fill={currentCar.secondary} stroke="#1a1c1c" strokeWidth="1" />

          <rect
            x="11"
            y="1"
            width="17"
            height="8"
            rx="2.5"
            fill="#111827"
            stroke="#1a1c1c"
            strokeWidth="2"
          />
          <circle cx="19.5" cy="5" r="2.2" fill={currentCar.secondary} stroke="#1a1c1c" strokeWidth="1" />

          <rect
            x="11"
            y="37"
            width="17"
            height="8"
            rx="2.5"
            fill="#111827"
            stroke="#1a1c1c"
            strokeWidth="2"
          />
          <circle cx="19.5" cy="41" r="2.2" fill={currentCar.secondary} stroke="#1a1c1c" strokeWidth="1" />

          {/* Main Lego Car Body Chassis */}
          <rect
            x="6"
            y="6"
            width="64"
            height="34"
            rx="5"
            fill={currentCar.primary}
            stroke="#1a1c1c"
            strokeWidth="3.5"
          />

          {/* Racing Center Stripe or Hood Accent */}
          <rect
            x="8"
            y="18"
            width="58"
            height="10"
            fill={currentCar.secondary}
            stroke="#1a1c1c"
            strokeWidth="1.5"
          />

          {/* Front Hood Tile */}
          <rect
            x="48"
            y="9"
            width="18"
            height="28"
            rx="3"
            fill={currentCar.primary}
            stroke="#1a1c1c"
            strokeWidth="2"
          />

          {/* Front Grille */}
          <line x1="68" y1="18" x2="68" y2="28" stroke="#1a1c1c" strokeWidth="3" strokeLinecap="round" />
          <line x1="66" y1="16" x2="66" y2="30" stroke="#ffd700" strokeWidth="1.5" />

          {/* Yellow Translucent Round 1x1 Headlights */}
          <circle cx="67" cy="12" r="3.5" fill="#fef08a" stroke="#1a1c1c" strokeWidth="1.8" />
          <circle cx="67" cy="12" r="1.5" fill="#ffffff" />

          <circle cx="67" cy="34" r="3.5" fill="#fef08a" stroke="#1a1c1c" strokeWidth="1.8" />
          <circle cx="67" cy="34" r="1.5" fill="#ffffff" />

          {/* Lego Studs on Hood (2 studs) */}
          <g>
            <circle cx="56" cy="15" r="3.2" fill={currentCar.primary} stroke="#1a1c1c" strokeWidth="1.6" />
            <circle cx="56" cy="15" r="3.2" fill="url(#studBevel)" />

            <circle cx="56" cy="31" r="3.2" fill={currentCar.primary} stroke="#1a1c1c" strokeWidth="1.6" />
            <circle cx="56" cy="31" r="3.2" fill="url(#studBevel)" />
          </g>

          {/* Cockpit / Windshield Glass */}
          <path
            d="M 28 9 L 45 9 L 42 37 L 28 37 Z"
            fill="url(#windshieldGlass)"
            stroke="#1a1c1c"
            strokeWidth="2.5"
          />
          <line x1="33" y1="12" x2="41" y2="34" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />

          {/* Lego Minifigure Driver (Yellow Head & Helmet) */}
          <circle cx="34" cy="23" r="5.5" fill="#facc15" stroke="#1a1c1c" strokeWidth="2" />
          <path
            d="M 30 18 Q 34 16 38 18 L 38 23 L 30 23 Z"
            fill={currentCar.secondary}
            stroke="#1a1c1c"
            strokeWidth="1.5"
          />
          <circle cx="36" cy="22" r="0.9" fill="#1a1c1c" />

          {/* Roof Feature: Taxi Sign or Police Light or Racing Studs */}
          {currentCar.id === "police" ? (
            <g>
              <rect x="22" y="14" width="6" height="18" rx="2" fill="#ffffff" stroke="#1a1c1c" strokeWidth="1.5" />
              <rect x="22" y="14" width="6" height="8" rx="1" fill="#ef4444" className="animate-pulse" />
              <rect x="22" y="24" width="6" height="8" rx="1" fill="#3b82f6" className="animate-pulse" />
            </g>
          ) : currentCar.id === "taxi" ? (
            <g>
              <rect x="20" y="15" width="8" height="16" rx="2" fill="#ffffff" stroke="#1a1c1c" strokeWidth="2" />
              <text x="24" y="26" fontSize="5" fontWeight="bold" fontFamily="sans-serif" fill="#1a1c1c" textAnchor="middle" transform="rotate(90 24 24)">
                TAXI
              </text>
            </g>
          ) : (
            <g>
              <circle cx="20" cy="14" r="3" fill={currentCar.primary} stroke="#1a1c1c" strokeWidth="1.5" />
              <circle cx="20" cy="14" r="3" fill="url(#studBevel)" />
              <circle cx="20" cy="32" r="3" fill={currentCar.primary} stroke="#1a1c1c" strokeWidth="1.5" />
              <circle cx="20" cy="32" r="3" fill="url(#studBevel)" />

              <text x="20" y="25" fontSize="7" fontWeight="900" fontFamily="sans-serif" fill="#ffffff" textAnchor="middle">
                {currentCar.number}
              </text>
            </g>
          )}

          {/* Rear Spoiler / Wing */}
          <rect
            x="4"
            y="7"
            width="6"
            height="32"
            rx="2"
            fill={currentCar.spoiler}
            stroke="#1a1c1c"
            strokeWidth="2.5"
          />

          {/* Dual Red Translucent Taillights */}
          <rect x="5" y="10" width="3" height="5" rx="1" fill="#ef4444" stroke="#1a1c1c" strokeWidth="1" />
          <rect x="5" y="31" width="3" height="5" rx="1" fill="#ef4444" stroke="#1a1c1c" strokeWidth="1" />

          {/* Dual Exhaust Pipes */}
          <circle cx="4" cy="16" r="2.2" fill="#374151" stroke="#1a1c1c" strokeWidth="1.5" />
          <circle cx="4" cy="30" r="2.2" fill="#374151" stroke="#1a1c1c" strokeWidth="1.5" />
        </svg>

        {/* Turbo Glow & Speed Streak Effect */}
        {isTurbo && (
          <div className="absolute -inset-2 rounded-lg bg-yellow-400/20 blur-sm pointer-events-none animate-ping" />
        )}
      </div>
    </div>
  );
}
