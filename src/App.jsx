import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Profiles from "./components/Profiles.jsx";
import Skills from "./components/Skills.jsx";
import { nav } from "./data.js";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let current = "";
        let best = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > best) {
            current = id;
            best = ratio;
          }
        });
        setActive(current);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <Header
        active={active}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
