import React, { useMemo } from "react";

export default function SoftBlobBackground() {
  const stars = useMemo(() => {
    const count = 90;
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2.9 + 0.6;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 2.8 + 1.6;
      const delay = Math.random() * 3.5;
      const opacity = Math.random() * 0.25 + 0.1;
      return { id: i, size, left, top, duration, delay, opacity };
    });
  }, []);

  const isPhone = typeof window !== "undefined" && window.innerWidth < 768;

  const blur = isPhone ? "blur(38px)" : "blur(50px)";
  const saturate = isPhone ? "saturate(145%)" : "saturate(115%)";
  const scale = isPhone ? "scale(1.12)" : "scale(1.05)";
  const opacity = isPhone ? 1 : 0.95;

  const PALETTE = {
    pinkStrong: "244,148,220",
    pinkSoft: "242,186,230",
    blush: "252,224,239",
    graySoft: "190,190,195",
    gray: "155,155,165",
  };

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#D3D3D3" }} />

      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(
            900px 650px at 55% 40%,
            rgba(${PALETTE.blush}, 0.8) 0%,
            rgba(${PALETTE.blush}, 0) 70%
          ),

          radial-gradient(
            900px 750px at 45% 30%,
            rgba(${PALETTE.graySoft}, 0.9) 0%,
            rgba(${PALETTE.graySoft}, 0) 65%
          ),

          radial-gradient(
            850px 700px at 30% 45%,
            rgba(${PALETTE.pinkStrong}, 0.85) 0%,
            rgba(${PALETTE.pinkStrong}, 0) 65%
          ),

          radial-gradient(
            900px 700px at 70% 65%,
            rgba(${PALETTE.pinkSoft}, 0.75) 0%,
            rgba(${PALETTE.pinkSoft}, 0) 70%
          ),

          radial-gradient(
            900px 700px at 70% 65%,
            rgba(${PALETTE.pinkSoft}, 0.75) 0%,
            rgba(${PALETTE.pinkSoft}, 0) 70%
          )
        `,
          filter: `${blur} ${saturate} contrast(112%)`,
          transform: scale,
          opacity,
        }}
      />

      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="star-speck"
            style={{
              left: `${s.left}vw`,
              top: `${s.top}vh`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
