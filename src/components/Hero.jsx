import { company } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1>{company.name}</h1>
        <p>{company.tagline}</p>
        <a className="button" href="#contact">
          start a project
        </a>
      </div>
    </section>
  );
}
