import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Custom hook to initialize Lenis smooth momentum scrolling across the entire portfolio.
 * Also hooks up global smooth scrolling for all anchor links (e.g. #home, #about, #projects, #contact).
 */
export default function useSmoothScroll() {
  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // Global listener for smooth anchor link scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href === "#" || href === "#home") {
        e.preventDefault();
        lenis.scrollTo(0, { offset: 0, duration: 1.2 });
        window.history.pushState(null, "", "#home");
      } else {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          // -90px offset to accommodate the fixed top navbar
          lenis.scrollTo(target, { offset: -90, duration: 1.2 });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
}
