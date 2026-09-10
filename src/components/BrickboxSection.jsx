import { useState } from "react";

const allSkills = [
  // Development
  {
    name: "NEXT.JS",
    category: "Full-Stack Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "REACT.JS",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TYPESCRIPT",
    category: "Full-Stack Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JAVASCRIPT",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TAILWIND",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "BOOTSTRAP",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "VITE",
    category: "Frontend Web",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "FLUTTER",
    category: "Mobile Development",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "DART",
    category: "Mobile Development",
    group: "Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "TESTING",
    category: "Quality & Testing",
    group: "Development",
    logo: "https://cdn.simpleicons.org/jest/C21325",
  },

  // Design
  {
    name: "FIGMA",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "UI/UX DESIGN",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.simpleicons.org/sketch/F7B500",
  },
  {
    name: "WIREFRAMING",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.simpleicons.org/framer/0055FF",
  },
  {
    name: "PROTOTYPING",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "USER RESEARCH",
    category: "UX Research",
    group: "Design",
    logo: "https://cdn.simpleicons.org/miro/FFD02F",
  },
  {
    name: "ACCESSIBILITY",
    category: "UX Foundations",
    group: "Design",
    logo: "https://cdn.simpleicons.org/materialdesign/757575",
  },
  {
    name: "DESIGN SYSTEMS",
    category: "UI/UX Design",
    group: "Design",
    logo: "https://cdn.simpleicons.org/storybook/FF4785",
  },

  // AI Engineering
  {
    name: "GENERATIVE AI",
    category: "AI Engineering",
    group: "AI Engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "LARGE LANGUAGE MODELS",
    category: "AI Engineering",
    group: "AI Engineering",
    logo: "https://cdn.simpleicons.org/huggingface/FFD21E",
  },
  {
    name: "AI AGENTS",
    category: "AI Engineering",
    group: "AI Engineering",
    logo: "https://cdn.simpleicons.org/langchain/1C3C3C",
  },

  // Machine Learning
  {
    name: "PYTHON",
    category: "Machine Learning",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SCIKIT-LEARN",
    category: "Machine Learning",
    group: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },

  {
    name: "INDOBERT",
    category: "Machine Learning",
    group: "Machine Learning",
    logo: "https://cdn.simpleicons.org/huggingface/FFD21E",
  },
  {
    name: "TRANSFORMERS",
    category: "Machine Learning",
    group: "Machine Learning",
    logo: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  },

  // Backend & Cloud
  {
    name: "NODE.JS",
    category: "Backend Development",
    group: "Backend & Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "EXPRESS.JS",
    category: "Backend Development",
    group: "Backend & Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "REST API",
    category: "Backend Development",
    group: "Backend & Cloud",
    logo: "https://cdn.simpleicons.org/postman/FF6C37",
  },
  {
    name: "PRISMA ORM",
    category: "Backend Development",
    group: "Backend & Cloud",
    logo: "https://cdn.simpleicons.org/prisma/2D3748",
  },
  {
    name: "POSTGRESQL",
    category: "Cloud & Databases",
    group: "Backend & Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SUPABASE",
    category: "Cloud & Databases",
    group: "Backend & Cloud",
    logo: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    name: "DOCKER",
    category: "DevOps & Cloud",
    group: "Backend & Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "VERCEL",
    category: "Cloud Deployment",
    group: "Backend & Cloud",
    logo: "https://cdn.simpleicons.org/vercel/1a1c1c",
  },

  // Tools & Technologies
  {
    name: "GIT",
    category: "Tools & Systems",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GITHUB",
    category: "Tools & Systems",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/github/1a1c1c",
  },
  {
    name: "VS CODE",
    category: "Tools & Systems",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "ARDUINO",
    category: "IoT Systems",
    group: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  {
    name: "ESP32",
    category: "IoT Systems",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/espressif/E7352C",
  },
  {
    name: "CHART.JS",
    category: "Data Viz",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/chartdotjs/FF6384",
  },
  {
    name: "GOOGLE COLAB",
    category: "Data Science",
    group: "Tools",
    logo: "https://cdn.simpleicons.org/googlecolab/F9AB00",
  },
];

const categories = ["ALL", "Development", "Design", "AI Engineering", "Machine Learning", "Backend & Cloud", "Tools"];
const INITIAL_SKILLS_COUNT = 8; // 2 rows on 4-column desktop grid

export default function BrickboxSection() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    activeTab === "ALL"
      ? allSkills
      : allSkills.filter((s) => s.group === activeTab);

  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_SKILLS_COUNT);

  const remainingCount = filteredSkills.length - INITIAL_SKILLS_COUNT;

  return (
    <div
      className="flex flex-col gap-6 mt-16 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28"
      id="skills"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 border-on-surface pb-4">
        <div className="reveal-left">
          <div className="font-label-caps text-label-caps text-primary mb-2 font-bold uppercase">
            TECHNICAL ARSENAL
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase">
            BRICKBOX <span className="text-brick-blue">// SKILLS</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 reveal-right">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 border-4 border-on-surface text-on-surface font-label-caps font-bold text-[12px] uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[6px_6px_0px_0px_#1a1c1c] active:translate-y-0.5 active:rotate-0 ${
                activeTab === cat
                  ? "bg-brick-yellow brick-shadow"
                  : "bg-white hover:bg-surface-container-high"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4">
        {displayedSkills.map((skill, idx) => (
          <div
            key={skill.name}
            className={`bg-white border-2 sm:border-3 border-on-surface rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3.5 brick-shadow hover:-translate-y-1 transition-transform group select-none min-w-0 reveal-pop delay-${
              ((idx % 4) + 1) * 100
            }`}
          >
            {/* Logo Icon Box */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl border-2 border-on-surface bg-[#f3f4f6] flex items-center justify-center p-2 flex-shrink-0 group-hover:bg-surface transition-colors">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Content Text */}
            <div className="flex flex-col items-start min-w-0 flex-grow">
              <h3 className="font-button-text text-on-surface font-black text-[12px] sm:text-[14px] md:text-[15px] tracking-wide uppercase truncate w-full">
                {skill.name}
              </h3>
              <span className="bg-brick-yellow border border-on-surface/90 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[11px] font-bold text-on-surface font-label-caps inline-block mt-0.5 truncate max-w-full">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-8">
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
              : `↓ VIEW ALL SKILLS (${remainingCount} MORE)`}
          </button>
        </div>
      )}
    </div>
  );
}
