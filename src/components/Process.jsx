import { steps } from "../data.js";

export default function Process() {
  return (
    <section id="process" className="section band">
      <div className="container">
        <h2 className="section-title">how a project works</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
