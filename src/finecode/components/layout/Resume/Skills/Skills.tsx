// components/Resume/Skills/Skills.tsx
import { useEffect, useRef } from 'react';
import './Skills.css';
import Data from "../../../../assets/data/skills.json";

const leftArray = Data.filter((_: string, index: number) => index % 2 === 0);
const rightArray = Data.filter((_: string, index: number) => index % 2 !== 0);

function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = skillsRef.current;
    if (!container) return;
    const items = container.querySelectorAll('li');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Skills" ref={skillsRef}>
      <h2 className="resume-section-heading"><span className="section-icon">◉</span> Skills &amp; Expertise</h2>
      <div className="skills-display-lg">
        <ul>
          {leftArray.map((value: string, i: number) => (
            <li key={`left-${i}`} className="right fly-from-left" style={{ transitionDelay: `${i * 0.08}s` }}>
              {value}
            </li>
          ))}
        </ul>
        <div className="divider" />
        <ul>
          {rightArray.map((value: string, i: number) => (
            <li key={`right-${i}`} className="left fly-from-right" style={{ transitionDelay: `${i * 0.08}s` }}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-display-sm">
        <ul>
          {Data.map((value: string, i: number) => (
            <li
              key={`sm-${i}`}
              className={`center ${i % 2 === 0 ? 'fly-from-left' : 'fly-from-right'}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
