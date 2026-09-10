import { useEffect } from "react";
import { personal } from "../data";

export default function CvModal({ isOpen, onClose }) {
  // Handle ESC key and stop/start Lenis when open
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

  if (!isOpen) return null;

  const pdfUrl = personal.cv || "/cv/CV_Adhitya_Afif_Ardana.pdf";

  return (
    <div data-lenis-prevent className="fixed inset-0 z-[100] bg-on-background/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-5xl h-[92vh] bg-surface border-4 border-on-surface brick-shadow rounded-2xl flex flex-col overflow-hidden my-auto">
        {/* Studs on top bar */}
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
            <span className="font-label-caps text-[11px] md:text-xs font-bold text-on-surface tracking-wider truncate max-w-[220px] md:max-w-none">
              CV_VIEWER // {personal.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block bg-on-surface text-white px-2 py-0.5 text-[10px] font-label-caps font-bold">
              RESUME
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

        {/* 2. PDF Viewer Container */}
        <div className="flex-1 w-full h-full bg-[#525659] relative overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full border-none bg-white"
            title={`CV ${personal.name}`}
          />
        </div>

        {/* 3. Modal Footer Bar */}
        <div className="bg-surface border-t-4 border-on-surface px-4 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none">
          <div className="font-label-caps text-[10px] md:text-xs text-on-surface-variant font-bold uppercase">
            CURRICULUM VITAE // PROFESSIONAL RESUME
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                open_in_new
              </span>
              OPEN IN NEW TAB
            </a>
            <a
              href={pdfUrl}
              download="CV_Adhitya_Afif_Ardana.pdf"
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-on-primary border-2 border-on-surface font-button-text text-xs font-bold uppercase brick-btn relative cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                download
              </span>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
