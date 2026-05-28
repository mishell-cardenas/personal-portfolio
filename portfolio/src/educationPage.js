import MovingGradient from "./components/MovingGradience";
import EducationCard from "./components/EducationCard";
import SkillCard from "./components/SkillCard";
import northeasternLogo from "./assets/northeastern.png";

const languages = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
];

const frameworks = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Axios", icon: "devicon-axios-plain colored" },
  { name: "OAuth 2.0", icon: "devicon-oauth-plain" },
];

const databases = [
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, 
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
];

const EducationPage = () => {
  return (
    <>
      <MovingGradient />
      <div
        className="
          min-h-screen flex flex-col items-center
          pt-32 px-10 pb-16
          max-sm:pt-36
          max-sm:px-5
          max-sm:pb-14
        "
      >
        <div className="w-full max-w-5xl mb-6 relative max-sm:mb-4">
          <h2 className="text-5xl font-display2 italic font-bold text-center max-sm:text-4xl">
            My Education and Skills
          </h2>
        </div>

        <div className="w-full max-w-4xl px-4 mb-6 relative max-sm:mb-4">
          <h3 className="text-2xl font-display2 italic font-bold text-gray-500 text-left">
            Education
          </h3>
        </div>

        <div className="w-full max-w-4xl px-4 py-2 space-y-8">
          <EducationCard
            logoSrc={northeasternLogo}
            title="Northeastern University"
            subtitle={
              <span>
                M.S. in Computer Science — <strong>3.78/4.00</strong>
              </span>
            }
            tag="Align Program"
            date="Sep 2024 – May 2027"
          />
          <EducationCard
            logoSrc={northeasternLogo}
            title="Northeastern University"
            subtitle={
              <span>
                B.S. in Business Administration — <strong>3.69/4.00</strong>
              </span>
            }
            tag="Concentrations in Marketing and Supply Chain Management"
            date="Sep 2018 – May 2022"
          />
        </div>

        <div className="w-full max-w-4xl px-4 mb-6 mt-8 relative max-sm:mb-4">
          <h3 className="text-2xl font-display2 italic font-bold text-gray-500 text-left">
            Skills
          </h3>
        </div>

        <div className="w-full max-w-4xl px-4 py-2 space-y-4">
          <SkillCard title="Programming Languages" skills={languages} />
          <SkillCard title="Frameworks & Libraries" skills={frameworks} />
          <SkillCard title="Databases & Tools" skills={databases} />
        </div>
      </div>
    </>
  );
};

export default EducationPage;
