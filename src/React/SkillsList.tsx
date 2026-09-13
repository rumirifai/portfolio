import React from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Languages & Frameworks": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  "Databases & Cloud": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
  ),
  "Tools & DevOps": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 3.26-1.25-1.25a2 2 0 0 0-2.83 0l-1.8 1.8 4.09 4.09 1.8-1.8a2 2 0 0 0 0-2.84Z"/></svg>
  ),
  "AI & Productivity": (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>
  ),
};

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Node.js",
      "Express.js",
      "NestJs",
      "FastAPI",
      "React.js",
      "GraphQL",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Google Cloud (GCP)",
      "Cloud Run",
      "Cloud SQL",
      "RESTful API",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD Workflows",
      "Jest (Unit Testing)",
      "NPM Ecosystem",
    ],
  },
  {
    category: "AI & Productivity",
    skills: [
      "AI Coding Agents (Antigravity/Cursor)",
      "Model Context Protocol (MCP)",
      "Agentic Workflows",
    ],
  },
];

const SkillsList: React.FC = () => {
  return (
    <div className="w-full text-left space-y-5">
      {/* Header & Brief Profile */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--sec)] uppercase tracking-widest shiny-sec">
            About &amp; Capabilities
          </span>
        </div>
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold">
          Technical Focus
        </h3>
        <p className="text-sm md:text-base text-[var(--white-icon)] leading-relaxed max-w-2xl">
          Computer Science graduate at Padjadjaran University specializing in
          scalable backend systems, RESTful API architecture, and cloud infrastructure.
          Experienced in managing relational database systems, implementing microservices,
          and leveraging AI agentic workflows to accelerate the delivery of robust, production-grade software.
        </p>
      </div>

      {/* Horizontal Grid of Skills Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {skillCategories.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-4 flex flex-col justify-between hover:border-[var(--sec)]/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--sec)]/30 transition-colors">
                {CategoryIcons[category]}
              </div>
              <h4 className="text-[var(--white)] text-sm font-semibold group-hover:text-[var(--sec)] transition-colors">
                {category}
              </h4>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/5 text-[var(--white-icon)] px-2.5 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;

