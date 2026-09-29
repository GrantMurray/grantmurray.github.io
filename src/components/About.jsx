import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">about me</h2>
        <div className="about-grid">
          <div>
            <h3>{profile.name}</h3>
            <p className="lede">{profile.about}</p>
            <div className="facts">
              <div>
                <h4>phone</h4>
                <p>
                  <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
                    {profile.phone}
                  </a>
                </p>
              </div>
              <div>
                <h4>email</h4>
                <p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="portrait">
            <img src="/images/about/profile_image.jpg" alt="Grant Murray" />
            <a className="portrait-link" href={profile.github}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
