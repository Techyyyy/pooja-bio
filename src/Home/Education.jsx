import "./About.css";
import "./Education.css";


const educationDetails = [
  { label: "DEGREE", value: "Bachelor’s degree" },
  { label: "FIELD", value: "Civil Engineering" },
  { label: "PERIOD", value: "Jul 2016 — May 2020" },
  { label: "INSTITUTION", value: "Vellore Institute of Technology, Chennai" },
];

export const Education = ({
  onClose = () => {},
  onNavigate = () => {},
}) => (
  <div
    className="sheet-backdrop education-backdrop"
    onClick={onClose}
    onKeyDown={(event) => {
      if (event.key === "Escape") onClose();
    }}
  >
    <section
      className="sheet-dialog about-sheet-view education-sheet-view"
      role="dialog"
      aria-modal="true"
      aria-labelledby="education-dialog-title"
      onClick={(event) => event.stopPropagation()}
    >
      <header className="about-header">
        <div className="about-title-wrap">
          <span className="about-dot" aria-hidden="true" />
          <h1 id="education-dialog-title">Education</h1>
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

      <main className="education-content">
        <article className="education-degree-card">
          <span className="education-status">GRADUATED</span>
          <h2>Vellore Institute of Technology, Chennai</h2>
          <p className="education-period">Jul 2016 — May 2020</p>
          <p className="education-summary">
            Bachelor’s degree · Civil Engineering
          </p>
          <div className="education-progress" aria-hidden="true">
            <span />
          </div>

          
        </article>

        <dl className="education-details">
          {educationDetails.map((detail) => (
            <div className="education-detail" key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </main>

      <footer className="about-footer">
        <button
          type="button"
          className="about-nav-button about-nav-left"
          onClick={() => onNavigate("experience")}
        >
          ← EXPERIENCE
        </button>

        <span className="about-sheet-index">SHEET 03 OF 05</span>

        <button
          type="button"
          className="about-nav-button about-nav-right"
          onClick={() => onNavigate("skills")}
        >
          SKILLS →
        </button>
      </footer>
    </section>
  </div>
);