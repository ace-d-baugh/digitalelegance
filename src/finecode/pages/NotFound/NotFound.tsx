// pages/NotFound/NotFound.tsx

import './NotFound.css';

function NotFound() {
    return (
        <div className="NotFound">
            <div>
                <h1>404</h1>
            </div>
            <div>
                <h2>Page Not Found</h2>
            </div>
            <div>
                <p>The page you are looking for does not exist.</p>
                <p>Please check the URL and try again.</p>
            </div>
            <div>
                <p>If you think this is an error, please contact us.</p>
            </div>
            <div>
                <p><a href="/">Home</a></p>
            </div>
        </div>
    );
}

export default NotFound