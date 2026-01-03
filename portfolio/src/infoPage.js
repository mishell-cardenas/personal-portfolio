import aboutMe from "./assets/about_me4.png";
import MovingGradient from "./components/MovingGradience";

const InfoPage = () => {
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
        <h2
          className="
            text-5xl font-display2 italic font-bold mb-8 text-center
            max-sm:text-4xl
            max-sm:mb-6
          "
        >
          About Me
        </h2>

        <div className="p-1 rounded-full bg-gradient-to-r from-[#9b9ba5] via-[#fce0ef] to-[#F2BAE6]/85 mb-10 max-sm:mb-8">
          <img
            src={aboutMe}
            alt="Profile"
            className="
              w-[180px] h-[180px]
              md:w-[320px] md:h-[320px]
              rounded-full object-cover object-[center_10%]
            "
          />
        </div>

        <div
          className="
            max-w-5xl text-gray-800 text-xl leading-relaxed space-y-6 text-justify
            max-sm:text-lg
            max-sm:leading-7
            max-sm:space-y-5
            max-sm:text-left
          "
        >
          <p>
            I graduated with a Bachelor's in Business Administration, with a
            double concentration in Marketing and Supply Chain Management. After
            graduating, I spent two years working as a Management Assistant at
            Import Aceros, where I monitored day-to-day operations and helped
            automate several internal processes. One project I worked on
            involved using SAP to predict product demand and improve sourcing
            and procurement decisions.
          </p>

          <p>
            This experience showed me first-hand how powerful technology and
            automation can be in improving business performance. Today, I am
            pursuing an MSCS to complement my business acumen. Now in my second
            year of the program, I have developed the technical skills and
            industry knowledge necessary to build software solutions for
            real-world problems. Most recently, I developed a web application to
            manage orders for a Boston microgreen business, shifting operations
            from spreadsheets to software and creating a centralized place where
            all data is stored.
          </p>

          <p>
            As I move forward in computer science, I am excited about
            opportunities that allow me to grow as a software engineer while
            applying my creativity to developing projects and solving real-world
            problems. I am also interested in the application of AI and machine
            learning to enhance existing processes. This curiosity has pushed me
            to work on a project that uses Gemini AI to generate insights from
            consumer financial data.
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
