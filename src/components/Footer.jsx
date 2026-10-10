import { useEffect, useState } from "react";
import { company } from "../data.js";

const year = new Date().getFullYear();

export default function Footer() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="site-footer">
      <p>&copy; {year} {company.name}</p>
      <a
        className={`to-top${showToTop ? " is-visible" : ""}`}
        href="#top"
        aria-label="Back to top"
        aria-hidden={!showToTop}
        tabIndex={showToTop ? undefined : -1}
      >
        ↑
      </a>
    </footer>
  );
}
