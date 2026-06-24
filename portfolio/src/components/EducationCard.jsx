export default function EducationCard({
  date,
  location,
  title,
  subtitle,
  description,
  tag,
  logoSrc,
  icon: Icon,
}) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl px-6 py-4 w-full
                flex items-start gap-5 transition hover:-translate-y-0.5 hover:border-pink-400 shadow-xl"
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt=""
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
        />
      ) : Icon ? (
        <div className="bg-pink-500 p-2.5 rounded-full shrink-0">
          <Icon className="text-white text-xl" />
        </div>
      ) : null}

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-base font-sans font-bold text-gray-900">{title}</h3>
          {date && (
            <p className="text-sm text-pink-400 font-bold uppercase tracking-wide shrink-0">
              {date}
            </p>
          )}
        </div>
        {subtitle && <p className="text-sm text-gray-600 mt-0.5">{subtitle}</p>}
        {tag && <p className="text-sm text-pink-400 font-bold mt-0.5">{tag}</p>}
        {description && (
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}