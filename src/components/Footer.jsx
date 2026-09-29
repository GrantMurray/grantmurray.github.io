import { company } from "../data.js";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {year} {company.name}</p>
      <a className="to-top" href="#top" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
}
