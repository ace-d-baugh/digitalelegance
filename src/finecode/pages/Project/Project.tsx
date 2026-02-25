// pages/Project/Project.tsx

import { useParams, useNavigate } from 'react-router-dom';
import Projects from '../../assets/data/projects.json';
import Carousel from '../../components/common/Carousel/Carousel';
import Frame from '../../components/common/Frame/Frame';
import './Project.css';

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

// Devicon CSS class strings — 'plain' variants for single-color theming
const techIconMap: Record<string, string> = {
    'React':        'devicon-react-original',
    'Angular':      'devicon-angularjs-plain',
    'Node.js':      'devicon-nodejs-plain',
    'Express':      'devicon-express-original',
    'MongoDB':      'devicon-mongodb-plain',
    'SQL':          'devicon-azuresqldatabase-plain',
    'CSS':          'devicon-css3-plain',
    'HTML':         'devicon-html5-plain',
    'JavaScript':   'devicon-javascript-plain',
    'TypeScript':   'devicon-typescript-plain',
    'Bootstrap':    'devicon-bootstrap-plain',
    'PHP':          'devicon-php-plain',
    'C#':           'devicon-csharp-plain',
    '.NET Core':    'devicon-dotnetcore-plain',
    'Stripe':       'devicon-stripe-plain',
    'WordPress':    'devicon-wordpress-plain',
    'WooCommerce':  'devicon-woocommerce-plain',
    'Photoshop':    'devicon-photoshop-plain',
    'Git':          'devicon-git-plain',
    'SoapUI':       '',   // no devicon — use fallback
    'Swagger':      'devicon-swagger-plain',
};

function Project() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project: Project | undefined = Projects.find(
        (p: Project) => p.id === Number(projectId)
    );

    if (!project) {
        return (
            <div className="Project project-not-found">
                <div className="not-found-inner">
                    <h1>Project Not Found</h1>
                    <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>
                    <button className="btn-back" onClick={() => navigate('/portfolio')}>
                        ← Back to Portfolio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="Project">

            {/* ── Page Header ── */}
            <div className="project-page-header">
                <p className="project-type-badge">{project.type}</p>
                <h1>{project.title}</h1>
                <p className="project-short-desc">{project.shortDescription}</p>
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
            </div>

            {/* ── Carousel with Frame border ── */}
            <div className="project-carousel-wrap">
                <Frame className="carousel-frame" />
                <Carousel imageUrls={project.imageUrls} title={project.title} />
            </div>

            {/* ── Case Study — Card Panel Design ── */}
            <div className="project-case-study">

                <div className="case-card">
                    <div className="case-card-number">I</div>
                    <div className="case-card-body">
                        <h2><span className="case-icon">◈</span> The Challenge</h2>
                        <p>{project.longDescription.issue}</p>
                    </div>
                </div>

                <div className="case-card">
                    <div className="case-card-number">II</div>
                    <div className="case-card-body">
                        <h2><span className="case-icon">◉</span> The Solution</h2>
                        <p>{project.longDescription.solution}</p>
                    </div>
                </div>

                <div className="case-card">
                    <div className="case-card-number">III</div>
                    <div className="case-card-body">
                        <h2><span className="case-icon">◎</span> Lessons Learned</h2>
                        <p>{project.longDescription.lessonsLearned}</p>
                    </div>
                </div>

                {project.longDescription.extraInfo?.trim() && (
                    <div className="case-card case-card-extra">
                        <div className="case-card-number">✦</div>
                        <div className="case-card-body">
                            <h2><span className="case-icon">◇</span> Notes</h2>
                            <p>{project.longDescription.extraInfo}</p>
                        </div>
                    </div>
                )}

            </div>

            {/* ── Technologies ── */}
            <div className="project-technologies">
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
                <h2>Technologies</h2>
                <ul className="tech-list">
                    {project.technologies.map((tech: string) => (
                        <li key={tech} className="tech-badge">
                            {techIconMap[tech]
                                ? <i className={`tech-icon ${techIconMap[tech]}`}></i>
                                : <span className="tech-icon tech-icon-fallback">◆</span>
                            }
                            <span className="tech-name">{tech}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Links ── */}
            <div className="project-links">
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
                <div className="links-row">
                    {project.codeUrl && project.codeUrl !== '#' && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                        >
                            View Code
                        </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                        >
                            Live Demo
                        </a>
                    )}
                    <button className="btn-back" onClick={() => navigate('/portfolio')}>
                        ← All Projects
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Project;
