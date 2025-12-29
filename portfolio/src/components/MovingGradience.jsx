export default function MovingGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-25 md:opacity-15"
        style={{
          background: `
            radial-gradient(900px 700px at 15% 25%, rgba(206,147,172,0.35) 0%, rgba(206,147,172,0) 60%),
            radial-gradient(900px 700px at 85% 20%, rgba(159,150,72,0.28) 0%, rgba(159,150,72,0) 60%),
            radial-gradient(900px 700px at 60% 85%, rgba(184,155,108,0.22) 0%, rgba(184,155,108,0) 65%)
          `,
          filter: "blur(70px) saturate(120%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-[#cbc1b4] to-[#9F9648]/85 opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>
    </div>
  );
}
