export default function SkillCard({ title, skills }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl px-10 py-5 w-full hover:-translate-y-0.5  hover:border-pink-400">
      <h4 className="text-base font-bold text-black tracking-wide mb-4">
        {title}
      </h4>
      <div className="flex flex-wrap gap-8 justify-center">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center gap-1.5">
            <i className={`${icon} text-5xl`} />
            <span className="text-xs text-pink-400 font-bold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
