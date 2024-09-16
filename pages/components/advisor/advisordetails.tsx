import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";

const advisor = {
  picture: "/images/advisor.jpg",
  name: "Dr. Emily Harper",
  areaoffocus: "Fundraising",
  company: "Global Ventures Inc.",
  profile: `
      Dr. Emily Harper is a distinguished business strategist with over 20 years of experience
      in driving growth and innovation for Fortune 500 companies. She holds a PhD in Business 
      Administration from Stanford University, and her groundbreaking research on business 
      model innovation has been featured in several leading publications. 

      Emily began her career at McKinsey & Company, where she helped companies restructure 
      and adapt to changing market conditions. She later transitioned to leadership roles at 
      various global firms, where she played a pivotal role in spearheading high-impact 
      initiatives, including digital transformations and large-scale mergers and acquisitions. 
      
      Throughout her career, she has successfully led cross-functional teams, developed 
      strategies that have increased company valuations, and advised C-suite executives 
      on making data-driven decisions that align with long-term business goals. Emily is 
      passionate about mentorship and frequently gives keynote speeches at industry events.

      A trusted advisor to CEOs and Boards of Directors, Emily has consistently provided 
      invaluable insights that have led to multi-million dollar growth across different 
      industries. Her expertise lies in corporate strategy, scaling businesses, and fostering 
      innovative ecosystems in highly competitive markets. In addition, she has worked closely 
      with various government bodies, helping them design policies to foster entrepreneurship 
      and economic growth.
    `,
};

const AdvisorDetails = () => {
  return (
    <Fragment>
      <Seo title={"Advisor Management"} />
      <Pageheader
        currentpage="Advisors Details"
        activepage="Dashboards"
        mainpage="Advisor"
      />

      <div className="box">
        <div className="flex flex-col gap-6 mt-8 px-8 py-4">
          <div className="flex flex-row items-start justify-between">
            <div className="flex items-center">
              <img
                src={advisor.picture}
                alt=""
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="flex items-center">
                  <h6 className="font-semibold mr-2">{advisor.name}</h6>
                </div>
              </div>
            </div>
            <button className="border-[1px] b text-primary bg-white px-3 py-1.5 rounded-md">
              Edit profile
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mt-12">
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <h6 className="font-semibold mr-2">{advisor.name}</h6>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/images/linkedin-colored.svg"
                      alt="LinkedIn Logo"
                      className="w-5 h-5 inline"
                    />
                  </a>
                </div>
                <h6 className="text-black/50 font-normal hs-dark-mode-active:text-white">
                  {advisor.areaoffocus}
                </h6>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <h6 className="text-black/50 font-normal hs-dark-mode-active:text-white">
                Areas of Expertise
              </h6>
              <h6 className="text-sm font-semibold w-full md:max-w-[400px]">
                Fundraising, People Management, Team Building
              </h6>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <h5 className="text-red text-sm">Company: HNG Limited</h5>
            <h5 className="text-sm">Cohort: May 2023, Oct 2024</h5>
          </div>
          <hr className="border-t border-gray-300" />
          <p className="text-black/50 hs-dark-mode-active:text-white leading-6 font-normal">
            {advisor.profile}
          </p>
          <div className="mt-4">
            <h6 className="font-bold">Industries previously worked</h6>
            <h6 className="font-normal text-black/50 hs-dark-mode-active:text-white">
              Fintech, Health, Finance, FMCG
            </h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
AdvisorDetails.layout = "Contentlayout";

export default AdvisorDetails;
