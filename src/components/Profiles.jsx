import { profile } from "../data.js";

export default function Profiles() {
  return (
    <section id="profiles" className="section">
      <div className="container">
        <h2 className="section-title">profiles</h2>
        <a className="profile-card" href={profile.github}>
          <span className="profile-mark" aria-hidden="true">
            GH
          </span>
          <span>github</span>
          <small>github.com/GrantMurray</small>
        </a>
      </div>
    </section>
  );
}
