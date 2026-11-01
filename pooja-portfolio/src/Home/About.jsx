import "./About.css";

const statRows = [
  [
    { label: "DISCIPLINE", value: "ReactJS / Front-End" },
    { label: "BASED IN", value: "Bengaluru, India" },
  ],
  [
    { label: "FRONT-END SINCE", value: "2021 · 5+ years" },
    { label: "EDUCATION", value: "B.Tech" },
  ],
];

export const About = ({ onClose = () => {}, onNavigate = () => {} }) => {
  return (
    <div
      className="sheet-backdrop about-backdrop"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
    >
      <section
        className="sheet-dialog about-sheet-view"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="about-header">
          <div className="about-title-wrap">
            <span className="about-dot" aria-hidden="true" />
            <h1 id="about-dialog-title">About</h1>
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

        <div className="about-grid" aria-hidden="true" />

        <div className="about-content">
          <div className="about-copy-column">
            <p className="about-lead">
              React developer with 5+ years on the web,
              specialized in building modern applications with Javascript
              and TypeScript.
            </p>

            <p className="about-body">
              Passionate about clean code, innovative solutions, and leveraging
              AI-assisted development to improve productivity, explore new ideas,
              and build better software.
            </p>

            <div className="about-actions" aria-label="Social links">
              <a href="https://www.linkedin.com/in/pooja-murugavel-8177b6188/" target="_blank" rel="noreferrer" className="about-link-button">
                LINKEDIN <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="about-link-button">
                GITHUB <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="about-details-panel" aria-label="About details">
            {statRows.map((row, rowIndex) => (
              <div className="about-details-row" key={`row-${rowIndex}`}>
                {row.map((item) => (
                  <div className="about-detail" key={item.label}>
                    <span className="about-detail-label">{item.label}</span>
                    <span className="about-detail-value">{item.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <footer className="about-footer">
          <button
            type="button"
            className="about-nav-button about-nav-left"
            onClick={() => onNavigate("contact")}
          >
            ← CONTACT
          </button>

          <span className="about-sheet-index">SHEET 01 OF 05</span>

          <button
            type="button"
            className="about-nav-button about-nav-right"
            onClick={() => onNavigate("experience")}
          >
            EXPERIENCE →
          </button>
        </footer>
      </section>
    </div>
  );
};
