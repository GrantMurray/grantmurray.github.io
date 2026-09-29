import { useEffect, useRef, useState } from "react";
import { skills } from "../data.js";

function Skill({ name, level }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill" ref={ref}>
      <span>{name}</span>
      <div className="skill-row">
        <div className="track">
          <div className="fill" style={{ width: shown ? `${level}%` : "0%" }} />
        </div>
        <strong>{level}%</strong>
      </div>
    </div>
  );
}

export default function Skills() {
  const midpoint = Math.ceil(skills.length / 2);
  const columns = [skills.slice(0, midpoint), skills.slice(midpoint)];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">skills</h2>
        <div className="skill-grid">
          {columns.map((column) => (
            <div key={column[0].name}>
              {column.map((skill) => (
                <Skill key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
