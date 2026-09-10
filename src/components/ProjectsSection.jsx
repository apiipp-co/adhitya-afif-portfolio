import { useState } from "react";
import { projects, projectCategories } from "../data";
import DetailModal from "./DetailModal";

const getCategoryColor = (category) => {
  switch (category) {
    case "UI/UX Design":
      return "bg-[#00852B] text-white";
    case "Machine Learning":
      return "bg-primary text-white";
    case "Web":
      return "bg-brick-blue text-white";
    case "IoT":
      return "bg-brick-yellow text-on-surface";
    default:
      return "bg-surface-container-highest text-on-surface";
  }
};

const INITIAL_DISPLAY_COUNT = 6; // 2 rows on 3-column desktop grid

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const remainingCount = filteredProjects.length - INITIAL_DISPLAY_COUNT;

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 border-b-4 border-on-surface pb-4">
        <div className="reveal-left">
          <div className="font-label-caps text-label-caps text-primary mb-2 font-bold uppercase">
            SELECTED WORKS
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase">
            BUILT <span className="text-brick-blue">PROJECTS</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 md:mt-0 reveal-right">
          {projectCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
              className={`px-4 py-2 border-4 border-on-surface text-on-surface font-label-caps font-bold text-[12px] uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[6px_6px_0px_0px_#1a1c1c] active:translate-y-0.5 active:rotate-0 ${
                activeFilter === filter
                  ? "bg-brick-yellow brick-shadow"
                  : "bg-white hover:bg-surface-container-high"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, idx) => (
          <div
            key={project.id || project.slug}
            className={`brick-card overflow-hidden group flex flex-col justify-between reveal-pop delay-${
              ((idx % 3) + 1) * 100
            }`}
          >
            <div>
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] border-b-4 border-on-surface bg-surface-container-low overflow-hidden cursor-pointer"
              >
                <img
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={project.image}
                  onError={(e) => {
                    e.currentTarget.src = "/images/profile-hero.jpg";
                  }}
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 ${getCategoryColor(
                    project.category
                  )} border-2 border-on-surface font-label-caps font-bold text-[10px] uppercase shadow-sm`}
                >
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-white border-2 border-on-surface font-label-caps font-bold text-[10px] uppercase">
                  {project.year}
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-button-text text-button-text text-on-surface uppercase mb-2 cursor-pointer hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-[13px] line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container border border-on-surface text-[10px] font-label-caps font-bold text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 bg-surface-container-high border border-on-surface text-[10px] font-label-caps font-bold text-on-surface-variant">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Links footer & View Details */}
            <div className="px-6 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-surface-container mt-2 pt-3">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1 text-xs font-label-caps font-bold text-primary hover:underline cursor-pointer"
              >
                <span>READ CASE STUDY</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>

              {project.links && (project.links.github || project.links.demo) && (
                <div className="flex gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface hover:text-primary transition-colors"
                      title={project.links.githubLabel || "GitHub Repository"}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        code
                      </span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface hover:text-brick-blue transition-colors"
                      title={project.links.demoLabel || "Live Demo"}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        open_in_new
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer"
          >
            <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
              <span className="w-3 h-3 rounded-full bg-white border-2 border-on-surface" />
            </div>
            {showAll
              ? "↑ SHOW LESS"
              : `↓ VIEW ALL PROJECTS (${remainingCount} MORE)`}
          </button>
        </div>
      )}

      {/* Detail Modal for Project */}
      <DetailModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
        type="project"
      />
    </section>
  );
}
