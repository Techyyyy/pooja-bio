import { useState } from "react";
import "./About.css";
import "./Contact.css";

const email = "poojamurugavel97@gmail.com";
const linkedin = "https://www.linkedin.com/in/pooja-murugavel-8177b6188/";

export const Contact = ({
  onClose = () => {},
  onNavigate = () => {},
}) => {
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy email. Please use the email link above.");
    }
  };

  return (
    <div
      className="sheet-backdrop contact-backdrop"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
    >
      <section
        className="sheet-dialog about-sheet-view contact-sheet-view"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="about-header">
          <div className="about-title-wrap">
            <span className="about-dot" aria-hidden="true" />
            <h1 id="contact-dialog-title">Contact</h1>
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

        <main className="contact-content">
          <div className="contact-message">
            <h2>
              Like what you see?
              <br />
              Get in touch.
            </h2>
            <p>
              Drop me a line about a role, a project, or just to say hi.
              <br />
              Email is the quickest way to reach me.
            </p>

            <a className="contact-email-link" href={`mailto:${email}`}>
              {email} <span aria-hidden="true">→</span>
            </a>

            <button
              className="contact-copy-button"
              type="button"
              onClick={copyEmail}
            >
              <i className="bi bi-copy" aria-hidden="true" />
              COPY EMAIL
            </button>
          </div>

          <dl className="contact-details">
            <div className="contact-detail">
              <dt>LINKEDIN</dt>
              <dd>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  /pooja-murugavel <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
            <div className="contact-detail">
              <dt>EMAIL</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          </dl>
        </main>

        <footer className="about-footer">
          <button
            type="button"
            className="about-nav-button about-nav-left"
            onClick={() => onNavigate("skills")}
          >
            ← SKILLS
          </button>

          <span className="about-sheet-index">SHEET 05 OF 05</span>

          <button
            type="button"
            className="about-nav-button about-nav-right"
            onClick={() => onNavigate("about")}
          >
            ABOUT →
          </button>
        </footer>
      </section>
    </div>
  );
};
