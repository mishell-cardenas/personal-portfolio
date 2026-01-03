import { useEffect, useRef } from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { motion, useAnimation, useInView } from "framer-motion";

function TimelineEntry({
  date,
  location,
  title,
  subtitle,
  description,
  bullets = [],
  icon: Icon,
  isLeft,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className={`
        relative flex w-full my-8 justify-center
        max-sm:my-6
        ${isLeft ? "md:justify-start" : "md:justify-end"}
      `}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-5 h-5 rounded-full border-4 border-white shadow bg-pink-400 max-sm:w-4 max-sm:h-4 max-sm:border-[3px]" />
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: isLeft ? -50 : 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full md:w-[45%]"
      >
        <div className="bg-white/60 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02] max-sm:p-5">
          <div className="flex items-center mb-4 max-sm:mb-3">
            <div className="bg-pink-500 p-3 rounded-full mr-4 max-sm:p-2.5 max-sm:mr-3">
              {Icon ? (
                <Icon className="text-white text-xl max-sm:text-lg" />
              ) : null}
            </div>

            <div>
              <h3 className="text-xl font-bold text-black max-sm:text-lg">
                {title}
              </h3>
              {subtitle ? (
                <p className="text-black max-sm:text-sm">{subtitle}</p>
              ) : null}
            </div>
          </div>

          <div
            className="
              flex items-center justify-start gap-4 mb-2 text-gray-500
              max-sm:flex-wrap
              max-sm:gap-3
              max-sm:text-sm
            "
          >
            <div className="flex items-center gap-1.5">
              <CiCalendar className="text-lg max-sm:text-base" />
              <span>{date}</span>
            </div>

            {location ? (
              <div
                className="
                  flex items-center gap-1.5
                  whitespace-nowrap
                  max-sm:whitespace-normal
                "
              >
                <CiLocationOn className="text-lg max-sm:text-base" />
                <span>{location}</span>
              </div>
            ) : null}
          </div>

          <p className="text-gray-800 leading-relaxed font-semibold italic text-justify max-sm:text-left max-sm:text-sm">
            {description}
          </p>

          {bullets.length > 0 && (
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700 max-sm:text-sm">
              {bullets.map((point, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed text-justify max-sm:text-left"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline({ items = [], title = "Timeline" }) {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) {
        return;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-5xl font-display italic font-bold mb-12 text-center max-sm:text-4xl max-sm:mb-8">
        {title}
      </h2>

      <div className="relative max-w-6xl mx-auto px-4 max-sm:px-3">
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            h-full w-1 rounded
            bg-gradient-to-b from-[#F2BAE6] via-[#fce0ef] to-[#9b9ba5]/85
          "
        />

        {items.map((item, idx) => (
          <TimelineEntry
            key={idx}
            date={item.date}
            location={item.location}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            bullets={item.bullets}
            icon={item.icon}
            isLeft={idx % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
