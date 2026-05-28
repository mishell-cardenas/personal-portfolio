import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  return (
    <div
      className="
        fixed left-12 top-1/2 -translate-y-1/2
        z-50
        hidden
        landscape:flex
        md:flex
        flex-col items-center gap-6
      "
    >
      <div className="w-px h-56 bg-black/70 mt-2" />
      <a
        href="https://www.github.com/mishell-cardenas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-pink-500 transition"
      >
        <FaGithub size={28} />
      </a>

      <a
        href="https://www.linkedin.com/in/mishell-cardenas/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-pink-500 transition"
      >
        <FaLinkedinIn size={28} />
      </a>

      <a
        href="mailto:cardenasespinosa.m@northeastern.edu"
        className="text-black hover:text-pink-500 transition"
      >
        <MdEmail size={28} />
      </a>

      <div className="w-px h-56 bg-black/70 mt-2" />
    </div>
  );
}
