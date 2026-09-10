import { useState, useEffect } from "react";

export default function DetailModal({ isOpen, onClose, data, type }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [data]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      if (window.lenis) window.lenis.start();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  // Normalize image list
  let images = [];
  if (data.images && data.images.length > 0) {
    images = data.images.filter((img) => typeof img === "string" ? img : img.src);
  } else if (data.image) {
    images = [{ src: data.image, caption: data.title || data.name }];
  }

  const currentImage = images[currentImageIndex];
  const currentImageSrc = typeof currentImage === "string" ? currentImage : currentImage?.src;
  const currentImageCaption = typeof currentImage === "object" ? currentImage?.caption : "";

  // Normalize titles and labels based on item type
  const title = data.title || data.degree || data.role || data.name || "Details";
  const subtitle =
    (type === "project" && data.projectType) ||
    data.institution ||
    data.company ||
    data.organization ||
    data.issuer ||
    data.category ||
    "";
  const period = data.period || data.year || data.date || "";
  const location = data.location || "";
  const categoryBadge =
    type === "education"
      ? "EDUCATION"
      : type === "experience"
      ? data.type || "EXPERIENCE"
      : type === "organization"
      ? "ORGANIZATION"
      : type === "certification"
      ? "CERTIFICATION"
      : type === "project"
      ? data.category?.toUpperCase() || "PROJECT"
      : "PORTFOLIO";

  const bullets = data.details || data.responsibilities || data.features || [];
  const technologies = data.technologies || [];

  return (
    <div data-lenis-prevent className="fixed inset-0 z-[110] bg-on-background/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Window */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-surface border-4 border-on-surface brick-shadow rounded-2xl flex flex-col overflow-hidden my-auto animate-scaleUp">
        {/* Top Studs Accent */}
        <div className="absolute -top-2.5 left-12 flex gap-4 pointer-events-none z-20">
          <span className="w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm" />
          <span className="w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm" />
          <span className="w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm" />
        </div>

        {/* 1. Header Bar (macOS / Retro Lego style) */}
        <div className="bg-surface-container-high border-b-4 border-on-surface px-4 md:px-6 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            {/* macOS styled colored dots with brick style */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-primary border-2 border-on-surface hover:opacity-80 transition-opacity cursor-pointer"
                title="Close"
              />
              <span className="w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface" />
              <span className="w-3.5 h-3.5 rounded-full bg-brick-blue border-2 border-on-surface" />
            </div>
            <span className="font-label-caps text-[11px] md:text-xs font-bold text-on-surface tracking-wider truncate max-w-[200px] sm:max-w-[340px] md:max-w-none">
              PORTFOLIO_VIEWER // {title.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-on-surface text-white px-2.5 py-0.5 text-[10px] font-label-caps font-bold tracking-wider uppercase border border-white/30">
              {categoryBadge}
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 border-2 border-on-surface bg-white hover:bg-primary hover:text-white flex items-center justify-center transition-colors font-bold text-sm brick-shadow cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 2. Modal Body: Split 2-Column Grid */}
        <div data-lenis-prevent className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 bg-white">
          {/* Left Column: Media / Photo Gallery */}
          <div className="lg:col-span-6 bg-[#1f2123] border-b-4 lg:border-b-0 lg:border-r-4 border-on-surface p-4 sm:p-6 flex flex-col justify-between items-center min-h-[300px] lg:min-h-[480px]">
            {images.length > 0 && currentImageSrc ? (
              <div className="w-full h-full flex flex-col justify-between items-center gap-3">
                {/* Image counter pill */}
                <div className="w-full flex justify-between items-center">
                  <span className="bg-black/60 text-white border border-white/30 px-2.5 py-0.5 text-xs font-mono font-bold rounded">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                  {currentImageCaption && (
                    <span className="text-white/80 text-xs font-label-caps truncate max-w-[200px]">
                      {currentImageCaption}
                    </span>
                  )}
                </div>

                {/* Main Image Container */}
                <div className="relative w-full flex-1 flex items-center justify-center min-h-[220px] max-h-[360px] lg:max-h-[420px] overflow-hidden rounded-lg border-2 border-white/20 bg-black/40 p-1">
                  <img
                    src={currentImageSrc}
                    alt={currentImageCaption || title}
                    className="w-full h-full object-contain max-h-[340px] rounded"
                    onError={(e) => {
                      e.currentTarget.src = "/images/profile-hero.jpg";
                    }}
                  />
                </div>

                {/* Gallery Navigation Controls */}
                {images.length > 1 && (
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? images.length - 1 : prev - 1
                        )
                      }
                      className="px-3 py-1 bg-white border-2 border-on-surface text-on-surface text-xs font-bold uppercase brick-shadow hover:bg-brick-yellow cursor-pointer"
                    >
                      ← PREV
                    </button>
                    <div className="flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full border border-white transition-all ${
                            currentImageIndex === i
                              ? "bg-brick-yellow w-5"
                              : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="px-3 py-1 bg-white border-2 border-on-surface text-on-surface text-xs font-bold uppercase brick-shadow hover:bg-brick-yellow cursor-pointer"
                    >
                      NEXT →
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white/60 p-8 text-center my-auto">
                <div className="w-20 h-20 rounded-2xl bg-surface-container border-2 border-white/20 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[48px] text-primary">
                    {type === "education"
                      ? "school"
                      : type === "certification"
                      ? "workspace_premium"
                      : type === "organization"
                      ? "groups"
                      : "work"}
                  </span>
                </div>
                <div className="font-label-caps text-sm text-white/80 uppercase font-bold">
                  {subtitle || title}
                </div>
                <p className="text-xs text-white/50 max-w-xs">
                  Official verified record from {personal_info(data)}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Detailed Information */}
          <div className="lg:col-span-6 p-6 md:p-8 flex flex-col gap-5 overflow-y-auto max-h-[70vh] lg:max-h-[560px]">
            {/* Year / Period Badge */}
            {period && (
              <div className="inline-block bg-brick-yellow border-2 border-on-surface px-3 py-0.5 text-xs font-label-caps font-bold text-on-surface w-fit brick-shadow">
                {period}
              </div>
            )}

            {/* Main Header */}
            <div>
              <h2 className="font-display-lg-mobile md:font-display-lg text-on-surface uppercase font-black text-xl md:text-2xl leading-tight">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm font-bold text-on-surface font-label-caps">
                {subtitle && <span className="text-primary">{subtitle}</span>}
                {location && (
                  <span className="text-on-surface-variant flex items-center gap-1 text-xs">
                    <span className="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    {location}
                  </span>
                )}
              </div>
            </div>

            {/* Description / Summary Callout Box */}
            {data.description && (
              <div className="p-4 bg-surface-container border-l-4 border-primary rounded-r-lg">
                <p className="font-body-md text-on-surface text-[13px] md:text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            )}

            {/* Problem & Solution for Projects */}
            {data.problem && (
              <div className="flex flex-col gap-2">
                <h4 className="font-label-caps text-xs font-bold text-primary uppercase">
                  Problem Context:
                </h4>
                <p className="font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed">
                  {data.problem}
                </p>
              </div>
            )}

            {data.solution && (
              <div className="flex flex-col gap-2">
                <h4 className="font-label-caps text-xs font-bold text-brick-blue uppercase">
                  Engineered Solution:
                </h4>
                <p className="font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed">
                  {data.solution}
                </p>
              </div>
            )}

            {/* Optional role summary for collaborative projects */}
            {type === "project" && data.roleDescription && (
              <div className="flex flex-col gap-2">
                <h4 className="font-label-caps text-xs font-bold text-primary uppercase">
                  My Role:
                </h4>
                <p className="font-label-caps text-xs md:text-[13px] font-bold text-on-surface uppercase">
                  {data.role}
                </p>
                <p className="font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed">
                  {data.roleDescription}
                </p>
              </div>
            )}

            {/* Bullet Points / Highlights */}
            {bullets.length > 0 && (
              <div className="flex flex-col gap-2.5 pt-2">
                <h4 className="font-label-caps text-xs font-black text-on-surface uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    check_circle
                  </span>
                  KEY HIGHLIGHTS &amp; DETAILS:
                </h4>
                <ul className="space-y-2 text-xs md:text-[13px] text-on-surface">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">■</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Optional evaluation context for research projects */}
            {type === "project" && data.evaluationNote && (
              <div className="p-4 bg-brick-yellow/20 border-l-4 border-brick-yellow rounded-r-lg">
                <h4 className="font-label-caps text-xs font-black text-on-surface uppercase mb-1.5">
                  Evaluation Note:
                </h4>
                <p className="font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed">
                  {data.evaluationNote}
                </p>
              </div>
            )}

            {/* Technologies / Arsenal */}
            {technologies.length > 0 && (
              <div className="flex flex-col gap-2 pt-2 border-t-2 border-surface-container">
                <h4 className="font-label-caps text-xs font-black text-on-surface uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-brick-blue text-[16px]">
                    terminal
                  </span>
                  {data.arsenalLabel || "TECHNOLOGIES & ARSENAL"}:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-surface-container border-2 border-on-surface text-[11px] font-label-caps font-bold text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Credential ID / Links */}
            {data.credentialId && (
              <div className="pt-2 border-t border-surface-container flex items-center gap-2 text-xs font-label-caps text-on-surface-variant font-bold">
                <span>CREDENTIAL ID:</span>
                <span className="font-mono text-on-surface bg-surface-container px-2 py-0.5 border border-on-surface">
                  {data.credentialId}
                </span>
              </div>
            )}

            {/* Action Links */}
            {(data.certificate || (data.links && (data.links.github || data.links.organization || data.links.demo))) && (
              <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-on-surface mt-auto">
                {data.certificate && (
                  <a
                    href={data.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brick-yellow text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-yellow-300 transition-colors cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span className="material-symbols-outlined text-[14px]">
                      workspace_premium
                    </span>
                  </a>
                )}
                {data.links?.github && (
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-on-surface text-white font-button-text text-xs uppercase brick-shadow hover:bg-primary transition-colors cursor-pointer"
                  >
                    <span>{data.links.githubLabel || "GITHUB REPO"}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                )}
                {data.links?.organization && (
                  <a
                    href={data.links.organization}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <span>KADA ORGANIZATION</span>
                    <span className="material-symbols-outlined text-[14px]">
                      groups
                    </span>
                  </a>
                )}
                {data.links?.demo && (
                  <a
                    href={data.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brick-yellow text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-yellow-300 transition-colors cursor-pointer"
                  >
                    <span>
                      {data.links.demoLabel || (data.links.demo.includes("figma.com")
                        ? "FIGMA PROTOTYPE"
                        : "LIVE DEMO")}
                    </span>
                    <span className="material-symbols-outlined text-[14px]">
                      launch
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. Footer Bar */}
        <div className="bg-surface border-t-4 border-on-surface px-4 md:px-6 py-3 flex items-center justify-between select-none">
          <div className="font-label-caps text-[10px] md:text-xs text-on-surface-variant font-bold uppercase">
            PORTFOLIO SHOWCASE // ADHITYA AFIF ARDANA
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary text-white border-2 border-on-surface font-button-text text-xs uppercase brick-btn cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

function personal_info(item) {
  return item.institution || item.company || item.organization || item.issuer || "Adhitya Afif Ardana";
}
