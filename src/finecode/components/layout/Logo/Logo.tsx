// components/Logo/Logo.tsx

import { Link } from 'react-router-dom';
import './Logo.css'

function Logo({ logoText }: { logoText: string }) {

	const logoArray = logoText.split(' ');

	return (
		<div className="Logo">
			<Link to="/">
				<div className="logoArray">
					<h1>{logoArray[0]}</h1>
					<h1>{logoArray[1]}</h1>
				</div>
			</Link>
		</div>
	);
}

export default Logo;