// pages/About/About.tsx

import './About.css';

function About() {
    return (
        <div className="About">
            <div className="about-hero">
                <h1>About</h1>
                <div className="about-title-ornament">
                    <span className="ornament-line"></span>
                    <span className="ornament-diamond">◆</span>
                    <span className="ornament-label">Ace Baugh</span>
                    <span className="ornament-diamond">◆</span>
                    <span className="ornament-line"></span>
                </div>
            </div>

            {/* Introduction */}
            <section className="about-section about-intro">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Introduction</h3>
                    <span className="section-header-line"></span>
                </div>
                <div className="intro-card">
                    <p>
                        As a full-stack web developer with a Bachelor&apos;s degree in Web Development
                        and certifications in Mobile Application Development and Digital Marketing,
                        I specialize in creating dynamic web and mobile applications. My experience
                        includes working on a high-profile project for the Walt Disney Company.
                        I am passionate about leveraging technology to create impactful applications
                        and committed to continuous learning and innovation.
                    </p>
                    <p>
                        My ability to navigate both code and communication allows me to serve as a
                        bridge between technical teams and client goals — delivering solutions that
                        are technically sound, user-focused, and visually compelling.
                    </p>
                </div>
            </section>

            <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>

            {/* Professional Journey */}
            <section className="about-section about-journey">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Professional Journey</h3>
                    <span className="section-header-line"></span>
                </div>
                <div className="journey-timeline">
                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <span className="timeline-dot">◆</span>
                            <span className="timeline-date">08 / 2023</span>
                        </div>
                        <div className="timeline-content">
                            <h4>Bachelor&apos;s of Science in Web Development</h4>
                            <p className="timeline-institution">Bellevue University &mdash; Bellevue, Nebraska</p>
                            <p>Focused on full-stack development with an emphasis on Angular. Built a solid foundation in front-end and back-end technologies, enabling me to create scalable, user-centered applications.</p>
                            <div className="timeline-accolades">
                                <span className="accolade">◆ Summa Cum Laude</span>
                                <span className="accolade">◆ Dean&apos;s List</span>
                                <span className="accolade">◆ GPA: 4.0</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <span className="timeline-dot">◆</span>
                            <span className="timeline-date">12 / 2020</span>
                        </div>
                        <div className="timeline-content">
                            <h4>Mobile Application Development Certificate</h4>
                            <p className="timeline-institution">Wilmington University &mdash; Wilmington, Delaware</p>
                            <p>Deepened expertise in cross-platform mobile development, responsive design, and progressive web application architecture.</p>
                            <div className="timeline-accolades">
                                <span className="accolade">◆ Dean&apos;s List</span>
                                <span className="accolade">◆ GPA: 4.0</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <span className="timeline-dot">◆</span>
                            <span className="timeline-date">09 / 2020</span>
                        </div>
                        <div className="timeline-content">
                            <h4>Digital Marketing Certificate</h4>
                            <p className="timeline-institution">Wilmington University &mdash; Wilmington, Delaware</p>
                            <p>Gained expertise in SEO, digital analytics, landing page optimization, and A/B testing — enabling comprehensive solutions that drive both engagement and business growth.</p>
                            <div className="timeline-accolades">
                                <span className="accolade">◆ Dean&apos;s List</span>
                                <span className="accolade">◆ GPA: 4.0</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <span className="timeline-dot">◆</span>
                            <span className="timeline-date">Featured</span>
                        </div>
                        <div className="timeline-content">
                            <h4>Walt Disney Company — Internal Tools Project</h4>
                            <p className="timeline-institution">High-Profile Enterprise Engagement</p>
                            <p>Contributed to a suite of internal applications used by Walt Disney Company cast members. Focused on Angular development, secure API integration, and UI performance — streamlining operations in a high-stakes, brand-critical environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>

            {/* Projects & Achievements */}
            <section className="about-section about-achievements">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Projects &amp; Achievements</h3>
                    <span className="section-header-line"></span>
                </div>
                <div className="achievements-grid">
                    <div className="achievement-card">
                        <i className="achievement-icon nf nf-fa-magic"></i>
                        <h4>Disney Internal Tools</h4>
                        <p>Contributed to enterprise Angular applications used by Walt Disney Company cast members — focusing on secure API integration and UI performance in a high-stakes environment.</p>
                    </div>
                    <div className="achievement-card">
                        <i className="achievement-icon nf nf-fa-mobile"></i>
                        <h4>Mobile App Prototypes</h4>
                        <p>Designed and developed mobile-friendly web application prototypes enabling clients to visualize cross-platform functionality early, facilitating stakeholder buy-in and faster iterations.</p>
                    </div>
                    <div className="achievement-card">
                        <i className="achievement-icon nf nf-fa-graduation_cap"></i>
                        <h4>Dean&apos;s List Honoree</h4>
                        <p>Awarded for academic excellence across multiple programs — earning Summa Cum Laude distinction and a 4.0 GPA, reflecting consistent commitment to mastery.</p>
                    </div>
                    <div className="achievement-card">
                        <i className="achievement-icon nf nf-fa-star"></i>
                        <h4>Peer &amp; Client Recognition</h4>
                        <p>Consistently recognized by colleagues, supervisors, and clients for professionalism, clear communication, and dedication to delivering beyond expectations.</p>
                    </div>
                </div>
            </section>

            <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>

            {/* Skills & Expertise */}
            <section className="about-section about-skills">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Skills &amp; Expertise</h3>
                    <span className="section-header-line"></span>
                </div>
                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="skill-icon nf nf-fa-code"></i>
                        <h4>Front-End</h4>
                        <ul>
                            <li>Angular &amp; React</li>
                            <li>TypeScript &amp; JavaScript (ES6+)</li>
                            <li>HTML5 &amp; CSS3</li>
                            <li>Component-Based Architecture</li>
                            <li>Responsive &amp; Accessible Design</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <i className="skill-icon nf nf-fa-server"></i>
                        <h4>Back-End</h4>
                        <ul>
                            <li>Node.js &amp; Express</li>
                            <li>RESTful API Design</li>
                            <li>SOAP &amp; API Integration</li>
                            <li>Web Security &amp; Auth</li>
                            <li>Server Management</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <i className="skill-icon nf nf-fa-database"></i>
                        <h4>Databases</h4>
                        <ul>
                            <li>MongoDB &amp; Firebase</li>
                            <li>SQL Server</li>
                            <li>NoSQL Strategies</li>
                            <li>Database Management</li>
                            <li>MERN / MEAN Stack</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <i className="skill-icon nf nf-fa-mobile"></i>
                        <h4>Mobile</h4>
                        <ul>
                            <li>Hybrid Frameworks</li>
                            <li>Progressive Web Apps</li>
                            <li>Cross-Platform Design</li>
                            <li>Responsive Layouts</li>
                            <li>Mobile Prototyping</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <i className="skill-icon nf nf-dev-git"></i>
                        <h4>Dev Tools</h4>
                        <ul>
                            <li>Git &amp; GitHub</li>
                            <li>Agile / Scrum / Jira</li>
                            <li>Unit Testing &amp; TDD</li>
                            <li>Browser DevTools</li>
                            <li>Figma &amp; Postman</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <i className="skill-icon nf nf-fa-line_chart"></i>
                        <h4>Marketing</h4>
                        <ul>
                            <li>SEO Optimization</li>
                            <li>Analytics Integration</li>
                            <li>A/B Testing</li>
                            <li>Landing Page Optimization</li>
                            <li>Digital Strategy</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>

            {/* Values & Mission */}
            <section className="about-section about-values">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Values &amp; Mission</h3>
                    <span className="section-header-line"></span>
                </div>
                <div className="values-quote">
                    <p>
                        Technology should be intuitive, purposeful, and accessible. I aim to create
                        experiences that not only function well but empower users to accomplish their
                        goals more efficiently.
                    </p>
                    <p>
                        I hold true to principles of integrity, lifelong learning, and service —
                        values that inform both my personal and professional life. Whether writing
                        code, mentoring others, or learning a new tool, I&apos;m driven by a desire
                        to contribute meaningfully to teams and communities.
                    </p>
                </div>
                <div className="values-pillars">
                    <div className="value-pillar">
                        <span className="pillar-symbol">◆</span>
                        <h4>Integrity</h4>
                        <p>Honest, transparent communication in every collaboration.</p>
                    </div>
                    <div className="value-pillar">
                        <span className="pillar-symbol">◆</span>
                        <h4>Mastery</h4>
                        <p>Continuous learning and pursuit of excellence in craft.</p>
                    </div>
                    <div className="value-pillar">
                        <span className="pillar-symbol">◆</span>
                        <h4>Service</h4>
                        <p>Building solutions that genuinely improve people&apos;s lives.</p>
                    </div>
                </div>
            </section>

            <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>

            {/* Personal Touch */}
            <section className="about-section about-personal">
                <div className="section-header">
                    <span className="section-header-line"></span>
                    <h3>Personal Touch</h3>
                    <span className="section-header-line"></span>
                </div>
                <p className="personal-intro">
                    Beyond the world of code, creativity and curiosity fuel my problem-solving
                    mindset and eye for design.
                </p>
                <div className="hobbies-grid">
                    <div className="hobby-card">
                        <i className="hobby-icon nf nf-fa-camera"></i>
                        <h4>Photography</h4>
                        <p>Capturing light, composition, and the perfect decisive moment.</p>
                    </div>
                    <div className="hobby-card">
                        <i className="hobby-icon nf nf-fa-scissors"></i>
                        <h4>Origami</h4>
                        <p>Folding precision and geometry into elegant paper structures.</p>
                    </div>
                    <div className="hobby-card">
                        <i className="hobby-icon nf nf-fa-cube"></i>
                        <h4>3D Printing</h4>
                        <p>Designing and fabricating functional objects layer by layer.</p>
                    </div>
                    <div className="hobby-card">
                        <i className="hobby-icon nf nf-fa-compass"></i>
                        <h4>Travel</h4>
                        <p>Exploring cultures and broadening perspective across the world.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
