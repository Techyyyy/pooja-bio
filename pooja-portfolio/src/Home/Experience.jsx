import "./About.css";
import "./Experience.css";

const experienceItems = [
  {
    role: "Technology Analyst",
    company: "Infosys Ltd.,",
    client: "Verizon",
    period: "MAY 2021 — MAY 2024",
    highlights: [
      "Developed enterprise-grade applications using ReactJS, TypeScript, Redux, and REST APIs, following accessibility guidelines and responsive design best practices.",
      "Embraced TDD (Test-Driven Development) and BDD (Behavior -Driven Development) practices using Jest, Enzyme, Cucumber, and Selenium, ensuring robust and maintainable code",
      "Implemented designs from Adobe XD and Figma, tracked in Jira",
      "Worked with Git/GitHub for version control and Jenkins for CI/CD integration",
      "Embraced TDD (Test-Driven Development) and BDD (Behavior -Driven Development) practices ensuring robust and maintainable code",
    ],
    skills: [
      "ReactJS",
      "Redux",
      "Styled-components",
      "TypeScript",
      "MUI",
      "Jenkins",
      "Figma",
      "Jira",
      "GitLab"
    ],
  },
  {
    role: "Packaged App Development Senior Analyst ",
    company: "Accenture Solutions Pvt Ltd.,",
    client: "DHL, Macy's",
    period: "JUN 2024 — JUL 2026",
    highlights: [
      "Implemented localization and globalization (i18n) support for React applications using dynamic translation files, enabling multi-language support and improving global user accessibility across regions.",
      "Review and approve code to ensure quality, security, and scalability",
      "Implemented designs from Adobe XD and Figma, tracked in Jira",
      "Utilized AI tools - GitHub Copilot/Gemini Code Assist to accelerate code generation and troubleshooting, reducing manual coding time",
      "Collaborate closely with backend engineers to integrate RESTful APIs and other data services",
    ],
    skills: [
      "Redux Toolkit",
      "ReduxToolkit Query",
      "vite",
      "TypeScript",
      "pdAdmin",
      "GCP",
      "Figma",
      "Agile",
      "Bootstrap",
      "GitHub"
    ],
  },
];

export const Experience = ({
  onClose = () => {},
  onNavigate = () => {},
}) => (
  <div
    className="sheet-backdrop experience-backdrop"
    onClick={onClose}
    onKeyDown={(event) => {
      if (event.key === "Escape") onClose();
    }}
  >
    <section
      className="sheet-dialog about-sheet-view experience-sheet-view"
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-dialog-title"
      onClick={(event) => event.stopPropagation()}
    >
      <header className="about-header">
        <div className="about-title-wrap">
          <span className="about-dot" aria-hidden="true" />
          <h1 id="experience-dialog-title">Experience</h1>
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

      <main className="experience-content">
        <div className="experience-timeline">
          {experienceItems.map((item) => (
            <article
              className="experience-entry"
              key={`${item.company}-${item.role}`}
            >
              <div className="experience-entry-content">
                <h2>
                  {item.role} <span>@ {item.company}</span>
                </h2>
                <p className="experience-client">
                  Client : {item.client}
                </p>
                <p className="experience-period">{item.period}</p>
                {item.highlights && (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                {item.skills && (
                  <ul
                    className="experience-skills"
                    aria-label={`${item.company} technologies`}
                  >
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="about-footer">
        <button
          type="button"
          className="about-nav-button about-nav-left"
          onClick={() => onNavigate("about")}
        >
          ← ABOUT
        </button>

        <span className="about-sheet-index">SHEET 02 OF 05</span>

        <button
          type="button"
          className="about-nav-button about-nav-right"
          onClick={() => onNavigate("education")}
        >
          EDUCATION →
        </button>
      </footer>
    </section>
  </div>
);
