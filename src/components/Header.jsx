import { nav } from "../data.js";

export default function Header({ active, menuOpen, onToggle, onNavigate }) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a className="brand" href="#top" onClick={onNavigate}>
          home
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
