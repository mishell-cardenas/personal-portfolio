import MovingGradient from "./components/MovingGradience";

const ResumePage = () => {
  const pdfPath = `${process.env.PUBLIC_URL}/cardenas_espinosa_resume8.pdf`;

  return (
    <>
      <MovingGradient />

      <div
        className="
          min-h-screen bg-pink-60 flex flex-col items-center
          pt-32 px-10 pb-16
          max-sm:pt-36
          max-sm:px-5
        "
      >
        <div className="w-full max-w-5xl mb-6 relative max-sm:mb-4">
          <h2 className="text-5xl font-display2 italic font-bold text-center max-sm:text-4xl">
            My Resume
          </h2>
        </div>

        <div className="hidden sm:block w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden shadow bg-white">
          <iframe
            src={pdfPath}
            title="Resume PDF"
            className="w-full h-full"
          />
        </div>

        <div className="sm:hidden w-full max-w-md mt-6 space-y-4">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center
              px-6 py-4 rounded-xl
              bg-white text-black
              font-semibold text-lg
              shadow-md
              hover:bg-white/90 transition
            "
          >
            View/Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
