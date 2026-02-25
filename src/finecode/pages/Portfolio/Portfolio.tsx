// pages/Portfolio/Portfolio.tsx
import Projects from '../../assets/data/projects.json';
import Card from '../../components/common/Card/Card';
import './Portfolio.css';

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
            <div className="project-grid">
                {Projects.map((project: Project) => (
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

export default Portfolio;
