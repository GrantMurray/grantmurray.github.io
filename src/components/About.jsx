import { company } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">about</h2>
        <div className="about-grid">
          <div>
            <h3>{company.name}</h3>
            <p className="lede">{company.about}</p>
            <div className="facts">
              <div>
                <h4>phone</h4>
                <p>
                  <a href={`tel:${company.phone.replaceAll("-", "")}`}>
                    {company.phone}
                  </a>
                </p>
              </div>
              <div>
                <h4>email</h4>
                <p>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="portrait">
            <img src="/images/about/profile_image.jpg" alt="Grant Murray" />
            <a className="portrait-link" href={company.github}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
