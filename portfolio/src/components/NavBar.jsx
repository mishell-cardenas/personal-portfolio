import { useLocation, useNavigate } from "react-router-dom";

function NavItem({ label, onClick, active = false }) {
  const base = `
    px-5 py-2 rounded-full 
    text-base md:text-lg 
    font-sans font-semibold transition
    max-sm:px-4 max-sm:py-2
    max-sm:text-sm
    `;

  if (active) {
    return (
      <button
        onClick={onClick}
        className={`${base} bg-white text-black shadow-sm`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} text-black/60 hover:text-black hover:bg-white/30`}
    >
      {label}
    </button>
  );
}

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const go = (path) => navigate(path);

  return (
    <div
      className="
        fixed left-0 right-0 z-50 flex justify-center
        top-6 px-4
        max-sm:top-3
      "
    >
      <nav
        className="
          flex items-center justify-center
          gap-2
          px-3 py-2
          rounded-full
          bg-white/40 backdrop-blur
          border border-white/50
          shadow-sm
          flex-wrap
          max-sm:gap-1
          max-sm:px-2
        "
      >
        <NavItem
          label="Home"
          onClick={() => go("/")}
          active={location.pathname === "/"}
        />
        <NavItem
          label="About Me"
          onClick={() => go("/infoPage")}
          active={location.pathname === "/infoPage"}
        />
        <NavItem
          label="Education & Skills"
          onClick={() => go("/educationPage")}
          active={location.pathname === "/educationPage"}
        />
        <NavItem
          label="Projects"
          onClick={() => go("/projectsPage")}
          active={location.pathname === "/projectsPage"}
        />
        <NavItem
          label="Work Experience"
          onClick={() => go("/experiencePage")}
          active={location.pathname === "/experiencePage"}
        />
        <NavItem
          label="Resume"
          onClick={() => go("/resumePage")}
          active={location.pathname === "/resumePage"}
        />
        <NavItem
          label="Contact"
          onClick={() => go("/contactPage")}
          active={location.pathname === "/contactPage"}
        />
      </nav>
    </div>
  );
}
