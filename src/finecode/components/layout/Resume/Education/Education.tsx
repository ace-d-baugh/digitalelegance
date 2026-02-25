// components/Resume/Education/Education.tsx
import './Education.css';
import Learning from "../../../../assets/data/education.json";

interface Certification {
  id: number;
  title: string;
  school: string;
  location: string;
  date: string;
  accolades: string[];
  type: string;
}

const degrees = Learning.filter((c: Certification) => c.type === 'degree');
const certs = Learning.filter((c: Certification) => c.type !== 'degree');

function Education() {
  return (
    <div className="Education">
      <h2 className="resume-section-heading"><span className="section-icon">◇</span> Education</h2>

      <div className="edu-degrees">
        {degrees.map((cert: Certification) => (
          <div className="degree-card" key={cert.id}>
            <div className="degree-date">{cert.date}</div>
            <div className="degree-title">{cert.title}</div>
            <div className="degree-school">{cert.school} <span className="degree-location">— {cert.location}</span></div>
            {cert.accolades.length > 0 && (
              <div className="degree-accolades">
                {cert.accolades.map((a, i) => (
                  <span className="accolade-badge" key={i}>{a}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="resume-section-heading resume-section-heading--sub"><span className="section-icon">◈</span> Certifications</h2>

      <div className="cert-grid">
        {certs.map((cert: Certification) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-date">{cert.date}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-school">{cert.school}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
