// pages/Resume/Resume.tsx
import Frame from '../../components/common/Frame/Frame';
import Education from "../../components/layout/Resume/Education/Education";
import Experience from "../../components/layout/Resume/Experience/Experience";
import ResumeHeader from "../../components/layout/Resume/Header/Header";
import Recognition from "../../components/layout/Resume/Recognition/Recognition";
import Skills from "../../components/layout/Resume/Skills/Skills";
import Summary from "../../components/layout/Resume/Summary/Summary";
import Work from "../../components/layout/Resume/Work/Work";
import './Resume.css';

function Resume() {
  return (
    <div className="Resume">
      <div className="resume-page-header">
        <span className="resume-overline">◆ Portfolio ◆</span>
        <h1 className="resume-title">Resume</h1>
        <div className="resume-deco-line"></div>
      </div>

      <div className="resume-content">
        <ResumeHeader />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Summary />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Skills />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Work />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Education />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Experience />

        <div className="resume-deco-divider"><span>◆</span></div>

        <Recognition />
      </div>

      <div className="resume-download">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download-btn"
        >
          <Frame className="button-frame all" />
          <span>⬇ Download PDF Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
