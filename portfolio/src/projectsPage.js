import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Carousel from "./components/Carousel";
import TechPill from "./components/TechPill";
import MovingGradient from "./components/MovingGradience";
import portfolio1 from "./assets/personal_portfolio_1.png";
import portfolio2 from "./assets/personal_portfolio_2.png";
import portfolio3 from "./assets/personal_portfolio_3.png";
import portfolio4 from "./assets/personal_portfolio_4.png";
import portfolio5 from "./assets/personal_portfolio_5.png";
import portfolio6 from "./assets/personal_portfolio_6.png";
import portfolio7 from "./assets/personal_portfolio_7.png";
import mb1 from "./assets/mb1.png";
import mb2 from "./assets/mb2.png";
import mb3 from "./assets/mb3.png";
import mb4 from "./assets/mb4.png";
import mb5 from "./assets/mb5.png";
import mb6 from "./assets/mb6.png";
import mb7 from "./assets/mb7.png";
import mb8 from "./assets/mb8.png";
import mb9 from "./assets/mb9.png";
import mb10 from "./assets/mb10.png";
import mb11 from "./assets/mb11.png";
import mb12 from "./assets/mb12.png";
import mb13 from "./assets/mb13.png";
import mb14 from "./assets/mb14.png";
import mb15 from "./assets/mb15.png";
import mb16 from "./assets/mb16.png";
import sap1 from "./assets/sap1.png";
import sap2 from "./assets/sap2.png";
import sap3 from "./assets/sap3.png";
import sap4 from "./assets/sap4.png";
import spotify1 from "./assets/spotify1.png";
import spotify2 from "./assets/spotify2.png";
import spotify3 from "./assets/spotify3.png";
import spotify4 from "./assets/spotify4.png";
import spotify5 from "./assets/spotify5.png";
import spotify6 from "./assets/spotify6.png";
import spotify7 from "./assets/spotify7.png";
import spotify8 from "./assets/spotify8.png";
import spotify9 from "./assets/spotify9.png";
import spotify10 from "./assets/spotify10.png";
import spotify11 from "./assets/spotify11.png";
import levelup1 from "./assets/levelup1.png";
import levelup2 from "./assets/levelup2.png";
import levelup3 from "./assets/levelup3.png";
import levelup4 from "./assets/levelup4.png";
import levelup5 from "./assets/levelup5.png";
import levelup6 from "./assets/levelup6.png";
import levelup7 from "./assets/levelup7.png";
import reposcout1 from "./assets/reposcout1.png";
import reposcout2 from "./assets/reposcout2.png";
import reposcout3 from "./assets/reposcout3.png";
import reposcout4 from "./assets/reposcout4.png";
import reposcout5 from "./assets/reposcout5.png";
import reposcout6 from "./assets/reposcout6.png";
import reposcout7 from "./assets/reposcout7.png";
import aurix1 from "./assets/aurix1.png";
import aurix2 from "./assets/aurix2.png";
import aurix3 from "./assets/aurix3.png";
import aurix4 from "./assets/aurix4.png";

const ProjectsPage = () => {
  return (
    <>
      <MovingGradient />
      <div
        className="
          min-h-screen flex flex-col items-center justify-center text-center
          pt-32 px-10 pb-16
          max-sm:pt-36
          max-sm:px-5
        "
      >
        <h2 className="text-4xl font-display2 italic font-bold mb-6 max-sm:text-4xl max-sm:mb-4">
          My Personal Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full max-sm:gap-5">
          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel images={[aurix1, aurix2, aurix3, aurix4]} height="h-58" />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              Aurix
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              Aurix is a full-stack web application that gives users a
              personalized spiritual "aura reading" powered by the Claude AI
              API. The user enters their screen name, zodiac sign, emotional
              state, and an optional Spotify username.
            </p>

            <div className="max-sm:mt-2">
              <TechPill
                tools={[
                  "REACT",
                  "TAILWIND CSS",
                  "NODE.JS",
                  "CLAUDE AI API",
                  "VERCEL CLI",
                ]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/Aurix-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
              <a
                href="https://aurix-app-eosin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 ml-7 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaLink size={23} />
                <span>Website</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel
              images={[
                reposcout1,
                reposcout2,
                reposcout3,
                reposcout4,
                reposcout5,
                reposcout6,
                reposcout7,
              ]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              RepoScout
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A full-stack web application that helps developers improve their
              coding skills by matching them to open-source GitHub repositories
              based on their current tech stack. Users can save repos to a
              personal tracker and log their contribution attempts over time.
            </p>

            <div className="max-sm:mt-2">
              <TechPill
                tools={[
                  "JAVASCRIPT",
                  "CSS",
                  "HTML",
                  "REACT",
                  "NODE",
                  "MONGODB",
                  "EXPRESS",
                  "BOOTSTRAP",
                ]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/RepoScout-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
              <a
                href="https://reposcout-app-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 ml-7 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaLink size={23} />
                <span>Website</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel
              images={[
                levelup1,
                levelup2,
                levelup3,
                levelup4,
                levelup5,
                levelup6,
                levelup7,
              ]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              LevelUp
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A full-stack web application that allows users to discover video
              games, share reviews, record play sessions, and manage a
              personalized game library.
            </p>

            <div className="max-sm:mt-2">
              <TechPill
                tools={[
                  "JAVASCRIPT",
                  "CSS",
                  "HTML",
                  "NODE",
                  "MONGODB",
                  "EXPRESS",
                  "BOOTSTRAP",
                ]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/LevelUp-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
              <a
                href="https://levelup-zp2s.onrender.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 ml-7 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaLink size={23} />
                <span>Website</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel
              images={[
                spotify1,
                spotify2,
                spotify3,
                spotify4,
                spotify5,
                spotify6,
                spotify7,
                spotify8,
                spotify9,
                spotify10,
                spotify11,
              ]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              Spotify Listening Profile
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A full-stack web application that lets users authenticate with
              Spotify and view personalized profile data through a clean web
              interface.
            </p>

            <div className="max-sm:mt-2">
              <TechPill
                tools={[
                  "TYPESCRIPT",
                  "NODE.JS",
                  "EXPRESS.JS",
                  "REACT",
                  "TAILWIND CSS",
                  "VITE",
                ]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/spotify-listening-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
              <a
                href="https://spotifylisten.vercel.app/?error=missing_code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 ml-7 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaLink size={23} />
                <span>Website</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel
              images={[
                mb1,
                mb2,
                mb3,
                mb4,
                mb5,
                mb6,
                mb7,
                mb8,
                mb9,
                mb10,
                mb11,
                mb12,
                mb13,
                mb14,
                mb15,
                mb16,
              ]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              GreenTrack: Microgreens Order Management System
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A full-stack web application built to help microgreen farms manage
              their day to day operations.
            </p>
            <div className="max-sm:mt-2">
              <TechPill
                tools={["PYTHON", "TYPESCRIPT", "REACT", "MYSQL", "FAST API"]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/microgreen_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow max-sm:p-5">
            <Carousel images={[sap1, sap2, sap3, sap4]} height="h-58" />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              SAP Logistics Data Integration
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A full-stack web application to help a steel importing company
              manage their steel importation process using SAP Business One.
            </p>

            <div className="max-sm:mt-2">
              <TechPill
                tools={["REACT", "JAVASCRIPT", "HTML", "CSS", "SAP HANA"]}
              />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/infoImportaciones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow max-sm:p-5">
            <Carousel
              images={[
                portfolio1,
                portfolio2,
                portfolio3,
                portfolio4,
                portfolio5,
                portfolio6,
                portfolio7,
              ]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center max-sm:text-lg">
              Portfolio Website
            </h3>
            <p className="max-sm:text-sm max-sm:leading-relaxed">
              A web based application to showcase my information in my personal
              portfolio.
            </p>

            <div className="max-sm:mt-2">
              <TechPill tools={["REACT", "JAVASCRIPT", "TAILWIND CSS"]} />
            </div>

            <div className="flex justify-center mt-4 max-sm:mt-3">
              <a
                href="https://github.com/mishell-cardenas/personal-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-2 items-center gap-2 text-black hover:text-pink-500 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-center">Eclát Elan</h3>
            <p>
              This full-stack project is a virtual fashion assistant designed to
              help users discover their ideal fashion style. By allowing users to
              browse and select images from various style categories, the system
              identifies their preferences and provides tailored recommendations.
              It also connects users to online shopping platforms where they can
              purchase clothing items that match their chosen style. Additionally,
              an integrated chatbot offers personalized guidance, helping users
              refine their look and explore new fashion inspirations.
            </p>
            <p>
              <span className="font-bold italic">Tools used: </span>
              React, MySQLWorkbench, Express, HTML, CSS, Javascript
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-center">ProsperaAI</h3>
            <p>
              With ProsperaAI we aimed to develop a finance assitant by helping
              users keep track of their expenses and thus strategize better for
              their budgeting. Through the use of bank and card statements, the
              program is able to determine when, where, and in what categories the
              user spends the most money in. Therefore, if the user has certain
              budgeting goals or wants to cut down expenses, the program is able
              to showcase that information accurately through the use of charts
              and a chatbot. The chatbot in particular is provides the user with
              accurate information from a specific/precise question they might
              have.
            </p>
            <p>
              <span className="font-bold italic">Tools used: </span>
              Typescript
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
