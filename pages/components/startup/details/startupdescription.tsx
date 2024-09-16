"use client";

import AdvisorsList from "./advisorslist";
import StartupFounders from "./StartupFounders";

const StartupDescription = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className=" box flex flex-col w-full md:w-[55%] gap-6 p-6">
        <div className="flex flex-col gap-4 w-full  ">
          <h5 className="font-medium text-xl">Pitch Presentation</h5>

          <div className="h-[18rem] sm:h-[18rem] rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Pitch Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col  gap-4  ">
          <h5 className="font-medium text-xl">About the Company</h5>

          <p className="text-sm text-gray-700 leading-relaxed hs-dark-mode-active:!text-white">
            XYZ Tech is an innovative technology company based in New York, USA,
            specializing in artificial intelligence and machine learning
            solutions. Established in 2015, XYZ Tech has been at the forefront
            of technological advancements, developing cutting-edge products that
            streamline business operations, enhance customer experiences, and
            drive digital transformation. The company’s flagship product, AI
            Assistant, leverages advanced algorithms to provide real-time
            analytics, automate routine tasks, and deliver personalized insights
            to users across various industries, including finance, healthcare,
            and e-commerce. With a team of over 50 skilled professionals, XYZ
            Tech prides itself on a culture of innovation, collaboration, and
            commitment to excellence. The company has received numerous
            accolades for its groundbreaking work, including recognition as one
            of the Top 50 Startups to Watch. As part of the 2024 Cohort, XYZ
            Tech aims to expand its global footprint and continue pushing the
            boundaries of what’s possible in the tech world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 text-red font-bold">
            <p className="">Cohorts: May, 2024</p>
            <p className="">Fundraising: $3,000,000</p>
            <p className="">Valuation: $400,000 </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%] box">
        <StartupFounders />
        <AdvisorsList />
      </div>
    </div>
  );
};

export default StartupDescription;
