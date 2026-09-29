import { useState } from "react";
import { profile } from "../data.js";

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
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(empty);
  }

  return (
    <section id="contact" className="section band">
      <div className="container">
        <h2 className="section-title">contact me</h2>
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
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Message"
              rows={8}
              required
            />
            <button className="button" type="submit">
              submit
            </button>
            {sent ? (
              <p className="form-note" role="status">
                Your mail app should open with this message addressed to{" "}
                {profile.email}.
              </p>
            ) : null}
          </form>
          <aside className="contact-card">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
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
          </aside>
        </div>
      </div>
    </section>
  );
}
