import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-inner">

        {/* Top ornament */}
        <div className="landing-ornament">
          <span className="landing-orn-line"></span>
          <span className="landing-orn-diamonds">&#9670; &#9670; &#9670;</span>
          <span className="landing-orn-line"></span>
        </div>

        {/* Title block */}
        <p className="landing-eyebrow">Welcome to</p>
        <h1 className="landing-title">Digital Elegance</h1>
        <div className="landing-rule"></div>
        <p className="landing-subtitle">Where Code Meets Art</p>

        {/* Middle ornament */}
        <div className="landing-ornament landing-ornament--sm">
          <span className="landing-orn-line"></span>
          <span className="landing-orn-diamonds">&#9670;</span>
          <span className="landing-orn-line"></span>
        </div>

        <p className="landing-choose">Choose Your Path</p>

        {/* Cards */}
        <div className="landing-choices">

          <Link to="/finecode" className="landing-card">
            <div className="landing-card-corner landing-card-corner--tl"></div>
            <div className="landing-card-corner landing-card-corner--tr"></div>
            <div className="landing-card-corner landing-card-corner--bl"></div>
            <div className="landing-card-corner landing-card-corner--br"></div>
            <div className="landing-card-inner">
              <span className="landing-card-icon">&#123;&nbsp;&#125;</span>
              <h2 className="landing-card-title">Fine Code</h2>
              <div className="landing-card-rule"></div>
              <p className="landing-card-desc">
                Software development portfolio &amp; professional showcase
              </p>
            </div>
          </Link>

          <div className="landing-card landing-card--coming-soon">
            <div className="landing-card-corner landing-card-corner--tl"></div>
            <div className="landing-card-corner landing-card-corner--tr"></div>
            <div className="landing-card-corner landing-card-corner--bl"></div>
            <div className="landing-card-corner landing-card-corner--br"></div>
            <div className="landing-card-inner">
              <span className="landing-card-icon">&#9670;</span>
              <h2 className="landing-card-title">Fine Art</h2>
              <div className="landing-card-rule"></div>
              <p className="landing-card-desc">
                Photography &amp; creative arts gallery
              </p>
              <span className="landing-card-badge">Coming Soon</span>
            </div>
          </div>

        </div>

        {/* Bottom ornament */}
        <div className="landing-ornament landing-ornament--bottom">
          <span className="landing-orn-line"></span>
          <span className="landing-orn-diamonds">&#9670;</span>
          <span className="landing-orn-line"></span>
        </div>

      </div>
    </div>
  );
}

export default Landing;
