import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">services</h2>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
