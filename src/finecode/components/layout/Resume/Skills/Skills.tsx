// components/Resume/Skills/Skills.tsx

import './Skills.css';
import Data from "../../../../assets/data/skills.json"

const leftArray = Data.filter((_: string, index: number) => index % 2 === 0);
const rightArray = Data.filter((_: string, index: number) => index % 2 !== 0);
function Skills() {
	return (
		<div className="Skills">
			<h2>Skills</h2>
			<div className="skills-display-lg">
				<ul>
					{leftArray.map((value: string) => (
						<li className="right">{value}</li>
					))}
				</ul>
				<div className="divider"></div>
				<ul>
					{rightArray.map((value: string) => (
						<li className="left">{value}</li>
					))}
				</ul>			
			</div>
			<div className="skills-display-sm">
				<ul>
					{Data.map((value: string) => (
						<li className="center">{value}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Skills;