import { useState } from "react";
import "./Canvas.css";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

const sectionIndex = [
  ["about", "01", "ABOUT"],
  ["experience", "02", "EXPERIENCE"],
  ["education", "03", "EDUCATION"],
  ["skills", "04", "SKILLS"],
  ["contact", "05", "CONTACT"],
];

export const Canvas = () => {
  const [activeSheet, setActiveSheet] = useState(null);

  return (
    <>
    {activeSheet === null && (
      <section className="blueprint" aria-label="Interactive portfolio">
        <div className="blueprint-scene">
          <div className="blueprint-board">
            <div className="board-browser" aria-hidden="true">
              <div className="browser-controls">
                <span />
              <span />
              <span />
            </div>
            <div className="browser-address">pooja.dev / portfolio</div>
          </div>

          <div className="blueprint-sheets">
            <button
              className="blueprint-sheet about-sheet"
              type="button"
              onClick={() => setActiveSheet("about")}
              aria-label="Open About section"
            >
              <span className="sheet-label">ABOUT</span>
              <span className="sheet-lines" aria-hidden="true">
                <i />
                <i className="about-line-tall" />
                <i className="about-line-short" />
              </span>
              <span className="sheet-accent about-accent" aria-hidden="true" />
              <span className="sheet-open">OPEN SHEET ↗</span>
            </button>

            <button
              className="blueprint-sheet skills-sheet"
              type="button"
              onClick={() => setActiveSheet("skills")}
              aria-label="Open Skills section"
            >
              <span className="sheet-label">SKILLS</span>
              <span className="skill-bars" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="sheet-open">OPEN SHEET ↗</span>
            </button>

            <button
              className="blueprint-sheet experience-sheet"
              type="button"
              onClick={() => setActiveSheet("experience")}
              aria-label="Open Experience section"
            >
              <span className="sheet-label">EXPERIENCE</span>
              <span className="experience-visual" aria-hidden="true">
                <span className="experience-box-row">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="experience-box-row">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="experience-lines">
                  <i />
                </span>
              </span>
              <span className="sheet-open">OPEN SHEET ↗</span>
            </button>

            <button
              className="blueprint-sheet education-sheet"
              type="button"
              onClick={() => setActiveSheet("education")}
              aria-label="Open Education section"
            >
              <span className="sheet-label"> EDUCATION</span>
              <span className="sheet-lines education-lines" aria-hidden="true">
                <i className="education-line-tall" />
                <i className="education-accent" />
                <i />
              </span>
              <span className="sheet-open">OPEN SHEET ↗</span>
            </button>

            <button
              className="blueprint-sheet contact-sheet"
              type="button"
              onClick={() => setActiveSheet("contact")}
              aria-label="Open Contact section"
            >
              <span className="sheet-label">CONTACT</span>
              <span className="contact-lines" aria-hidden="true">
                <i />
                <span className="contact-line">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </span>
              <span className="sheet-open">OPEN SHEET ↗</span>
            </button>
          </div>

        </div>
      </div>

      <nav className="section-index" aria-label="Portfolio sections">
        {sectionIndex.map(([id, number, label]) => (
          <button
            className="section-index-item"
            key={id}
            type="button"
            onClick={() => setActiveSheet(id)}
          >
            <span className="section-index-number">{number}</span>
            <span className="section-index-label">{label}</span>
          </button>
        ))}
      </nav>

    </section>
    )}
    {activeSheet === "about" && (
      <About
        onClose={() => setActiveSheet(null)}
        onNavigate={setActiveSheet}
      />
    )}
    {activeSheet === "experience" && (
      <Experience
        onClose={() => setActiveSheet(null)}
        onNavigate={setActiveSheet}
      />
    )}
    {activeSheet === "education" && (
      <Education
        onClose={() => setActiveSheet(null)}
        onNavigate={setActiveSheet}
      />
    )}
    {activeSheet === "skills" && (
      <Skills
        onClose={() => setActiveSheet(null)}
        onNavigate={setActiveSheet}
      />
    )}
    {activeSheet === "contact" && (
      <Contact
        onClose={() => setActiveSheet(null)}
        onNavigate={setActiveSheet}
      />
    )}
      </>
  );
};
