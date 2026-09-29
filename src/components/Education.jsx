import { education } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="section band">
      <div className="container">
        <h2 className="section-title">education</h2>
        <div className="edu-grid">
          {education.map((item) => (
            <article key={item.title} className="edu-card">
              <p className="years">{item.years}</p>
              <h3>{item.title}</h3>
              <div className="rule">
                <span className="dot" />
              </div>
              <h4>{item.school}</h4>
              <p className="place">{item.place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
