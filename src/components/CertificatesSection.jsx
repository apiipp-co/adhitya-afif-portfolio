import { useState } from "react";
import { certifications } from "../data";
import DetailModal from "./DetailModal";

const INITIAL_CERT_COUNT = 6;

export default function CertificatesSection() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const displayedCertifications = showAllCerts
    ? certifications
    : certifications.slice(0, INITIAL_CERT_COUNT);

  const remainingCertCount = certifications.length - INITIAL_CERT_COUNT;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mt-12">
      <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left">
        LICENSES &amp; CERTIFICATIONS
      </h3>

      <div
        id="certifications-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedCertifications.map((cert, idx) => (
          <div
            key={cert.id || cert.name}
            className={`brick-card p-6 bg-white relative flex flex-col justify-between group reveal-pop delay-${
              ((idx % 3) + 1) * 100
            }`}
          >
            <div className="absolute -top-3 left-4 flex gap-4 px-2 pointer-events-none">
              <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
              <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
            </div>

            <div>
              <div
                onClick={() => setSelectedCert(cert)}
                className="w-full aspect-[16/9] bg-surface-container-low border-2 border-on-surface mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer group-hover:opacity-95"
              >
                {cert.images && cert.images.length > 0 && cert.images[0].src ? (
                  <img
                    src={cert.images[0].src}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="material-symbols-outlined text-[48px] text-primary">
                    workspace_premium
                  </span>
                )}
              </div>

              <h4 className="font-button-text text-on-surface uppercase mb-1 text-[14px] md:text-[15px] leading-snug break-words">
                {cert.name}
              </h4>
              <div className="font-label-caps text-primary text-[11px] font-bold leading-snug break-words">
                {cert.issuer} • {cert.date}
              </div>
              <p className="mt-2 font-body-md text-on-surface text-[12px] leading-relaxed line-clamp-2">
                {cert.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-container flex justify-between items-center">
              {cert.credentialId ? (
                <span className="text-[10px] font-label-caps text-on-surface-variant font-mono">
                  ID: {cert.credentialId}
                </span>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[10px] font-bold uppercase brick-btn cursor-pointer"
              >
                <span>DETAILS</span>
                <span className="material-symbols-outlined text-[12px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {remainingCertCount > 0 && (
        <div className="flex justify-center mt-8 reveal-pop">
          <button
            type="button"
            onClick={() => setShowAllCerts((isVisible) => !isVisible)}
            aria-expanded={showAllCerts}
            aria-controls="certifications-grid"
            className="px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer"
          >
            <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
            </div>
            {showAllCerts
              ? "↑ SHOW LESS"
              : `↓ VIEW ALL CERTIFICATIONS (${remainingCertCount} MORE)`}
          </button>
        </div>
      )}

      {/* Detail Modal for Certification */}
      <DetailModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        data={selectedCert}
        type="certification"
      />
    </div>
  );
}
