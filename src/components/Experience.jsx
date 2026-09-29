import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section band">
      <div className="container">
        <h2 className="section-title">experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.org}-${job.years}`}>
              <div className="when">
                <p className="years">{job.years}</p>
                <h3>{job.role}</h3>
              </div>
              <div className="what">
                <h4>{job.org}</h4>
                <p className="place">{job.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
