// pages/NotFound/NotFound.tsx

import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="NotFound">
            <div className="not-found-container">
                <div className="not-found-ornament">
                    <span className="not-found-orn-line"></span>
                    <span className="not-found-orn-diamonds">◆ ◆ ◆</span>
                    <span className="not-found-orn-line"></span>
                </div>

                <p className="not-found-eyebrow">Error</p>
                <h1 className="not-found-code">404</h1>
                <div className="not-found-rule"></div>
                <h2 className="not-found-title">Page Not Found</h2>

                <p className="not-found-text">
                    The page you are seeking has vanished into the art deco ether.
                    Perhaps it never existed, or perhaps it has moved on to grander venues.
                </p>

                <div className="not-found-ornament not-found-ornament--bottom">
                    <span className="not-found-orn-line"></span>
                    <span className="not-found-orn-diamonds">◆</span>
                    <span className="not-found-orn-line"></span>
                </div>

                <Link to="/" className="not-found-btn">
                    &#9664; Return Home &#9654;
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
