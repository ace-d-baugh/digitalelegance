// components/Button/Button.tsx

import { Link } from 'react-router-dom';
import Frame from '../Frame/Frame';
import './Button.css'

function Button({ text, link }: { text: string; link: string }) {
    return (
        <div className="btn-container">
            <Link to={link}>
                {text}
                <Frame className="button-frame all"></Frame>
            </Link>
        </div>
    );
}

export default Button