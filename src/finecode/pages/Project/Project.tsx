// pages/Project/Project.tsx

import { useParams } from "react-router-dom";
import Projects from '../../assets/data/projects.json';
import Carousel from "../../components/common/Carousel/Carousel";
import './Project.css'

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

function Project() {
    const { projectId } = useParams();
    const project: Project | undefined = Projects.find((p: Project) => p.id === Number(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.shortDescription}</p>
            <Carousel imageUrls={project.imageUrls} title={project.title} />
            <h2>Long Description</h2>
            <p>Issue: {project.longDescription.issue}</p>
            <p>Solution: {project.longDescription.solution}</p>
            <p>Lessons Learned: {project.longDescription.lessonsLearned}</p>
            <p>Extra Info: {project.longDescription.extraInfo}</p>
            <h2>Technologies</h2>
            <ul>
                {project.technologies.map((tech: string) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <h2>Links</h2>
            <p>
                <a href={project.codeUrl}>Code</a>
            </p>
            <p>
                <a href={project.liveUrl}>Live</a>
            </p>
        </div>
    );
}


export default Project;