import "./About.css";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "MUI",
      "HTML",
      "CSS",
      "SASS",
    ],
  },
  {
    title: "AI",
    skills: ["MCP", "Agents"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Enzyme", "React Testing Library"],
  },
  {
    title: "Tools & Workflows",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Figma",
      "Jira",
      "Postman",
      "pgAdmin",
      "Agile",
    ],
  },
];

export const Skills = ({
  onClose = () => {},
  onNavigate = () => {},
}) => (
  <div
    className="sheet-backdrop skills-backdrop"
    onClick={onClose}
    onKeyDown={(event) => {
      if (event.key === "Escape") onClose();
    }}
  >
    <section
      className="sheet-dialog about-sheet-view skills-sheet-view"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-dialog-title"
      onClick={(event) => event.stopPropagation()}
    >
      <header className="about-header">
        <div className="about-title-wrap">
          <span className="about-dot" aria-hidden="true" />
          <h1 id="skills-dialog-title">Skills</h1>
        </div>

        <button
          type="button"
          className="about-back-button"
          onClick={onClose}
          aria-label="Back to plan"
        >
          <span aria-hidden="true">×</span>
          BACK TO PLAN
        </button>
      </header>

      <main className="skills-content">
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skills-card${index === 0 ? " skills-card-featured" : ""}`}
              key={group.title}
            >
              <div className="skills-card-meta">
                <span>
                  MAT-{String(index + 1).padStart(2, "0")} · {group.skills.length} ITEMS
                </span>
                <span className={`skills-pattern skills-pattern-${index + 1}`} aria-hidden="true" />
              </div>

              <h2>{group.title}</h2>
              <div className="skills-card-rule" aria-hidden="true" />

              <ul className="skills-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>

      <footer className="about-footer">
        <button
          type="button"
          className="about-nav-button about-nav-left"
          onClick={() => onNavigate("education")}
        >
          ← EDUCATION
        </button>

        <span className="about-sheet-index">SHEET 04 OF 05</span>

        <button
          type="button"
          className="about-nav-button about-nav-right"
          onClick={() => onNavigate("contact")}
        >
          CONTACT →
        </button>
      </footer>
    </section>
  </div>
);
