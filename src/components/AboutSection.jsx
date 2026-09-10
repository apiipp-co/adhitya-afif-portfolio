import { useState, useEffect, useRef } from "react";
import { personal, education } from "../data";
import DetailModal from "./DetailModal";

function FastCounter({ target, suffix = "", duration = 1400 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const startedRef = useRef(false);

  const startCounting = (customDuration = duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / customDuration, 1);

      // Fast-forward acceleration and smooth deceleration curve like a sped-up clock / odometer
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            startCounting();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={() => startCounting(700)}
      className="tabular-nums font-extrabold select-none inline-block transition-transform group-hover:scale-110"
      title="Hover to spin again!"
    >
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  { value: 12, suffix: "+", label: "Projects Completed", delay: "delay-100", duration: 1200 },
  { value: 3, suffix: "+", label: "Years of Experience", delay: "delay-200", duration: 1000 },
  { value: 15, suffix: "+", label: "Tech Mastered", delay: "delay-300", duration: 1400 },
  { value: 100, suffix: "%", label: "Passion for Code", delay: "delay-400", duration: 1700 },
];

export default function AboutSection() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32">
      <div className="flex flex-col gap-12">
        {/* About */}
        <div className="flex flex-col gap-6">
          <h2 className="font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase reveal-pop">
            ABOUT ME
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bio Card */}
            <div className="brick-card p-8 bg-white h-full flex flex-col justify-center relative reveal-left delay-100">
              <div className="absolute -top-3 left-4 flex gap-4 px-2 pointer-events-none">
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
              </div>
              <h3 className="font-display-lg-mobile text-primary uppercase font-extrabold mb-3">
                {personal.about.intro}
              </h3>
              <p className="font-body-md text-body-md text-on-surface mb-4 max-w-3xl leading-relaxed whitespace-pre-line text-justify">
                {personal.about.description}
              </p>
              <div className="mt-auto pt-4 border-t-2 border-on-surface flex items-center gap-2 text-xs font-bold text-on-surface-variant font-label-caps">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  location_on
                </span>
                {personal.location}
              </div>
            </div>

            {/* Education & Stats */}
            <div className="flex flex-col gap-6 reveal-right delay-150">
              <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase">
                EDUCATION
              </h3>

              <div className="flex flex-col gap-4">
                {education.map((edu, idx) => (
                  <div
                    key={edu.id}
                    className={`brick-card p-6 relative bg-white flex gap-4 items-start group reveal-pop delay-${
                      (idx + 1) * 100
                    }`}
                  >
                    <div className="w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center p-2 brick-shadow">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[28px]">
                          school
                        </span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap md:flex-row md:justify-between md:items-start gap-1 mb-1">
                        <h4 className="font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words">
                          {edu.institution}
                        </h4>
                        <div className="bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0">
                          {edu.period}
                        </div>
                      </div>
                      <div className="font-button-text text-primary uppercase text-[13px] md:text-[14px] leading-snug break-words">
                        {edu.degree}
                      </div>
                      <p className="mt-2 font-body-md text-on-surface text-[13px] leading-relaxed line-clamp-2">
                        {edu.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedEdu(edu)}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer"
                      >
                        <span>VIEW DETAILS</span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Cards with Fast Counter Odometer Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                {STATS_DATA.map((stat) => (
                  <div
                    key={stat.label}
                    className={`brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1c1c] transition-all group reveal-pop ${stat.delay} cursor-default`}
                  >
                    <div className="font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5">
                      <FastCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        duration={stat.duration}
                      />
                    </div>
                    <div className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for Education */}
      <DetailModal
        isOpen={Boolean(selectedEdu)}
        onClose={() => setSelectedEdu(null)}
        data={selectedEdu}
        type="education"
      />
    </section>
  );
}
