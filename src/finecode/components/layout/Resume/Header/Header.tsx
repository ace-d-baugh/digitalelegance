// components/Resume/Header/Header.tsx
import './Header.css';

function ResumeHeader() {
  return (
    <div className="Resume-Header">
      <div className="resume-header-top-border"></div>
      <h1 className="resume-header-name">Matthew Ace Baugh</h1>
      <div className="resume-header-title">Full-Stack &amp; Front-End Developer</div>
      <div className="resume-header-contact">
        <span className="contact-item">📍 Kissimmee, FL</span>
        <span className="contact-sep">◆</span>
        <span className="contact-item"><a href="tel:2085579223">(208) 557-9223</a></span>
        <span className="contact-sep">◆</span>
        <span className="contact-item"><a href="mailto:ace@digitalelegance.com">ace@digitalelegance.com</a></span>
        <span className="contact-sep">◆</span>
        <span className="contact-item"><a href="https://github.com/ace-d-baugh" target="_blank" rel="noopener noreferrer">github.com/ace-d-baugh</a></span>
      </div>
      <div className="resume-header-bottom-border"></div>
    </div>
  );
}

export default ResumeHeader;
