// components/Resume/Work/Work.tsx
import './Work.css';
import AllJobs from "../../../../assets/data/work.json";

interface Job {
  id: number;
  title: string;
  employer: string;
  location: string;
  start: string;
  end: string;
  responsibilities: string[];
}

// Display order: most recent/relevant tech roles first
const displayOrder = [3, 1, 2, 4, 5, 6, 7];
const Jobs = displayOrder
  .map(id => AllJobs.find((j: Job) => j.id === id))
  .filter(Boolean) as Job[];

function Work() {
  return (
    <div className="Work">
      <h2 className="resume-section-heading"><span className="section-icon">◎</span> Work History</h2>
      <div className="work-timeline">
        <div className="timeline-line"></div>
        {Jobs.map((job: Job) => (
          <div className="timeline-entry" key={job.id}>
            <div className="timeline-dot">◆</div>
            <div className="job-card">
              <div className="job-card-header">
                <div className="job-dates">{job.start} — {job.end}</div>
                <div className="job-location">{job.location}</div>
              </div>
              <div className="job-title">{job.title}</div>
              <div className="job-employer">{job.employer}</div>
              <ul className="job-responsibilities">
                {job.responsibilities.map((r: string, i: number) => (
                  <li key={i}><span className="resp-bullet">›</span>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
