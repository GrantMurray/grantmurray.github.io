import { useState } from "react";
import { company } from "../data.js";

const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    const subject = encodeURIComponent(form.subject || "Website message");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(empty);
  }

  return (
    <section id="contact" className="section band">
      <div className="container">
        <h2 className="section-title">start a project</h2>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Name*"
                required
                autoComplete="name"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="Email*"
                required
                autoComplete="email"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={update}
                placeholder="Project"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="What do you need?"
              rows={8}
              required
            />
            <button className="button" type="submit">
              submit
            </button>
            {sent ? (
              <p className="form-note" role="status">
                Your mail app should open with this message addressed to{" "}
                {company.email}.
              </p>
            ) : null}
          </form>
          <aside className="contact-card">
            <h3>{company.name}</h3>
            <p>{company.tagline}</p>
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
          </aside>
        </div>
      </div>
    </section>
  );
}
