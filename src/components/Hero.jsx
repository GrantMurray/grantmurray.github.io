import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
        <a className="button" href="/download/resume-GrantMurray.pdf" download>
          resume
        </a>
      </div>
    </section>
  );
}
