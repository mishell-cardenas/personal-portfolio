function Pill({ label }) {
  return (
    <span className="px-4 py-1.5 rounded-full bg-[#FFC6F3] text-black text-xs font-semibold tracking-wide">
      {label}
    </span>
  );
}

export default function TechPill({ tools = [] }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-4">
      {tools.map((tool) => (
        <Pill key={tool} label={tool} />
      ))}
    </div>
  );
}
