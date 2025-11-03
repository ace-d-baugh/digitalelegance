// pages/Portfolio/Portfolio.tsx

import Button from "../../components/common/Button/Button";
import Projects from '../../assets/data/projects.json';
import Photo from "../../components/common/Photo/Photo";
import { Link } from "react-router-dom";
import './Portfolio.css'

interface LongDescription {
    issue: string;
    solution: string;
    lessonsLearned: string;
    extraInfo: string;
}

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: LongDescription;
    technologies: string[];
    imageUrls: string[];
    codeUrl: string;
    liveUrl: string;
    type: string;
}

function Portfolio() {
    return (
        <div className="Portfolio">
            <h1>Portfolio | Case Studies</h1>
            {Projects.map((project: Project) => (
                <div key={project.id} className="project">
                    <Link to={`/project/${project.id}`}>
                        <h2>{project.title}</h2>
                    </Link>
                    <p>{project.type}</p>                            
                    <p>{project.shortDescription}</p>
                    <Photo src={project.imageUrls[0]} width={200} height={200} alt={project.title} />
                    <p>{project.longDescription.issue}</p>
                    <Button text="More Details" link={`/project/${project.id}`} />
                    <p>&nbsp;</p>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;