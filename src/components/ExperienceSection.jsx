import { useState } from "react";
import { experiences, organizations, trainings } from "../data";
import DetailModal from "./DetailModal";

const INITIAL_EXP_COUNT = 4; // 2 rows on 2-column desktop grid
const INITIAL_ORG_COUNT = 4; // 2 rows on 2-column desktop grid

export default function ExperienceSection() {
  const [showAllExp, setShowAllExp] = useState(false);
  const [showAllOrg, setShowAllOrg] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("experience");

  const displayedExperiences = showAllExp
    ? experiences
    : experiences.slice(0, INITIAL_EXP_COUNT);

  const remainingExpCount = experiences.length - INITIAL_EXP_COUNT;

  const displayedOrganizations = showAllOrg
    ? organizations
    : organizations.slice(0, INITIAL_ORG_COUNT);

  const remainingOrgCount = organizations.length - INITIAL_ORG_COUNT;

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      {/* Experience */}
      <div className="mt-12">
        <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left">
          EXPERIENCE
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {displayedExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`brick-card p-8 relative bg-white flex flex-col gap-5 justify-between group reveal-pop delay-${
                ((idx % 4) + 1) * 100
              }`}
            >
              <div>
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-2 brick-shadow overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className={`w-full h-full ${
                          exp.logoFit === "cover" ? "object-cover" : "object-contain"
                        } ${exp.logoScale || ""}`}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        work
                      </span>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-wrap md:flex-row md:justify-between md:items-start gap-1.5 mb-2">
                      <div className="inline-block px-3 py-1 bg-surface-container-high border-2 border-on-surface text-on-surface font-label-caps font-bold text-[10px] uppercase w-fit">
                        {exp.type}
                      </div>
                      <div className="bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0">
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words">
                      {exp.company}
                    </h3>
                    <div className="font-button-text text-primary uppercase mt-1 text-[13px] md:text-[14px] leading-snug break-words">
                      {exp.role}
                    </div>
                  </div>
                </div>

                <p className="font-body-md text-on-surface text-[14px] leading-relaxed mt-4 line-clamp-3">
                  {exp.description}
                </p>

                {/* Experience Photo Thumbnails */}
                {exp.images && exp.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t-2 border-surface-container">
                    {exp.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => openModal(exp, "experience")}
                        className="aspect-[4/3] border-2 border-on-surface overflow-hidden bg-surface-container relative cursor-pointer hover:opacity-90"
                        title={img.caption}
                      >
                        <img
                          src={img.src}
                          alt={img.caption || exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal(exp, "experience")}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer"
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

        {/* View All Experiences Button */}
        {remainingExpCount > 0 && (
          <div className="flex justify-center mb-12 reveal-pop">
            <button
              onClick={() => setShowAllExp(!showAllExp)}
              className="px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer"
            >
              <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
              </div>
              {showAllExp
                ? "↑ SHOW LESS"
                : `↓ VIEW ALL EXPERIENCES (${remainingExpCount} MORE)`}
            </button>
          </div>
        )}

        {/* Training */}
        <div className="mt-12">
          <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left">
            TRAINING
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, idx) => (
              <div
                key={training.id}
                className={`brick-card p-8 relative bg-white flex flex-col gap-5 justify-between group reveal-pop delay-${
                  (idx + 1) * 100
                }`}
              >
                <div>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-2 brick-shadow overflow-hidden">
                      {training.logo ? (
                        <img
                          src={training.logo}
                          alt={training.program}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[28px]">
                          model_training
                        </span>
                      )}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap md:flex-row md:justify-between md:items-start gap-1.5 mb-2">
                        <span className="inline-block px-3 py-1 bg-surface-container-high border-2 border-on-surface text-on-surface font-label-caps font-bold text-[10px] uppercase w-fit">
                          {training.type}
                        </span>
                        <span className="bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0">
                          {training.period}
                        </span>
                      </div>

                      <h4 className="font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words">
                        {training.program}
                      </h4>
                      <div className="font-button-text text-primary uppercase mt-1 text-[13px] md:text-[14px] leading-snug break-words">
                        {training.role}
                      </div>
                      {training.company !== training.program && (
                        <div className="font-label-caps text-on-surface-variant text-[10px] font-bold mt-1.5 leading-snug break-words">
                          {training.company}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="font-body-md text-on-surface text-[14px] leading-relaxed mt-4 line-clamp-3">
                    {training.description}
                  </p>

                  {training.images && training.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t-2 border-surface-container">
                      {training.images.slice(0, 3).map((img, imageIndex) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => openModal(training, "experience")}
                          className="aspect-[4/3] border-2 border-on-surface overflow-hidden bg-surface-container relative cursor-pointer hover:opacity-90"
                          title={img.caption}
                        >
                          <img
                            src={img.src}
                            alt={img.caption || training.program}
                            className="w-full h-full object-cover"
                          />
                          {imageIndex === 2 && training.images.length > 3 && (
                            <span className="absolute inset-0 bg-on-surface/65 text-white flex items-center justify-center font-button-text text-lg font-bold">
                              +{training.images.length - 3}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openModal(training, "experience")}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer"
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
        </div>

        {/* Organizations */}
        <div className="mt-10 md:mt-12">
          <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left">
            Organizations &amp; Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedOrganizations.map((org, idx) => (
              <div
                key={org.id}
                className={`brick-card p-6 bg-white flex flex-col gap-4 justify-between relative group reveal-pop delay-${
                  ((idx % 4) + 1) * 100
                }`}
              >
                <div>
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 brick-shadow overflow-hidden">
                      {org.logo ? (
                        <img
                          src={org.logo}
                          alt={org.organization}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[24px]">
                          groups
                        </span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <h4 className="font-button-text text-on-surface uppercase text-[14px] md:text-[15px] leading-snug break-words">
                          {org.organization}
                        </h4>
                        <span className="bg-surface-container px-2 py-0.5 border border-on-surface font-label-caps text-[9px] font-bold flex-shrink-0">
                          {org.period}
                        </span>
                      </div>
                      <div className="font-label-caps text-primary text-[11px] uppercase font-bold mt-1 leading-snug break-words">
                        {org.role}
                      </div>
                    </div>
                  </div>

                  <p className="font-body-md text-on-surface text-[13px] leading-relaxed mt-3 line-clamp-3">
                    {org.description}
                  </p>

                  {/* Organization photos */}
                  {org.images && org.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2 mt-2 border-t-2 border-surface-container">
                      {org.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => openModal(org, "organization")}
                          className="aspect-[4/3] border-2 border-on-surface overflow-hidden bg-surface-container relative cursor-pointer hover:opacity-90"
                          title={img.caption}
                        >
                          <img
                            src={img.src}
                            alt={img.caption || org.organization}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Details Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openModal(org, "organization")}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer"
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

          {/* View All Organizations Button */}
          {remainingOrgCount > 0 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllOrg(!showAllOrg)}
                className="px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer"
              >
                <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                  <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
                </div>
                {showAllOrg
                  ? "↑ SHOW LESS"
                  : `↓ VIEW ALL ORGANIZATIONS (${remainingOrgCount} MORE)`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        data={selectedItem}
        type={modalType}
      />
    </div>
  );
}
