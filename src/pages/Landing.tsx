import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Digital Elegance</h1>
      <p>Choose your path:</p>
      <div className="choices">
        <Link to="/finecode" className="choice-card">
          <h2>Fine Code</h2>
          <p>Explore my programming portfolio</p>
        </Link>
        <Link to="/fineart" className="choice-card">
          <h2>Fine Art</h2>
          <p>View my photography collection</p>
        </Link>
      </div>
    </div>
  );
}

export default Landing;