import { useEffect } from "react";

/**
 * Custom hook that observes elements with reveal animation classes
 * and triggers Lego-style snap entrance transitions when scrolled into view.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-scale")
        .forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.05,
    });

    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-scale"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("reveal-visible")) {
          observer.observe(el);
        }
      });
    };

    // Initial observe
    observeAll();

    // MutationObserver to catch tab switches, filter changes, and view all expansions
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
