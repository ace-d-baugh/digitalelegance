// components/Showcase/Showcase.tsx

// import { useEffect } from "react";
import Card from "../../common/Card/Card"
import './Showcase.css'
import Projects from '../../../assets/data/projects.json'
// import LogoScroll from '../LogoScroll/LogoScroll'


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


function Showcase() {
    return (
        <div className="Showcase">
            <h2>Showcase</h2>
            { /* <LogoScroll /> */ }
            <div className="cards">
                {Projects.slice(0, 9).map((project: Project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        imageUrl={project.imageUrls[0]}
                        alt={project.title}
                        description={project.shortDescription}
                    />
                ))}
            </div>
        </div>
    );
}

export default Showcase;