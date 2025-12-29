export default function Footer() {
  return (
    <footer className="w-full text-xs md:text-sm text-black/70">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div
          className="
            flex font-mono
            flex-col items-center gap-1
            md:flex-row md:justify-between md:items-center
          "
        >
          <span>© 2025</span>
          <span className="text-center">
            Created by Mishell Cárdenas Espinosa
          </span>
        </div>
      </div>
    </footer>
  );
}
