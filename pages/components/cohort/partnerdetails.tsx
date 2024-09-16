import Pageheader from "@/shared/layout-components/page-header/pageheader";
import React, { Fragment } from "react";

interface PartnerDetails {
  name: string;
  type: string;
  status: string;
  contributionDetails: string;
  associatedEntities: string[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

const partnerDetail: PartnerDetails = {
  name: "TechCorp",
  type: "Corporate",
  status: "Active",
  contributionDetails: `TechCorp has been an integral partner in driving innovation and technological advancements within the startup ecosystem. Their contribution spans multiple facets including offering world-class cloud computing services, providing access to mentorship from seasoned industry professionals, and financial grants aimed at boosting early-stage companies. In addition to these, TechCorp also facilitates  workshops that focus on product development, marketing strategies, and investor relations. Their long-term  commitment to fostering a collaborative environment for startups has resulted in a noticeable increase  in success rates for participants in their program. Moreover, TechCorp's dedication to corporate social   responsibility is evident through their focus on promoting diversity and inclusion within the tech space,  particularly by supporting female-founded and minority-led startups.`,
  associatedEntities: ["Cohort 2023", "Startup ABC", "Startup XYZ"],
  contactInfo: {
    email: "contact@techcorp.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Innovation City, TX, 75001",
  },
};

const ProgramPartnerDetails = () => {
  return (
    <Fragment>
      <Pageheader
        currentpage="Partner's Details"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />
      <div className="box custom-card">
        <div className="box-body my-3">
          <h1 className="text-xl font-bold mb-2 text-blue-700">
            {partnerDetail.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className=" font-semibold">Type:</p>
              <p className="text-sm">{partnerDetail.type}</p>
            </div>
            <div>
              <p className=" font-semibold">Status:</p>
              <p className="text-green">{partnerDetail.status}</p>
            </div>
            <div>
              <p className=" font-semibold">Email:</p>
              <p className="text-sm">{partnerDetail.contactInfo.email}</p>
            </div>
            <div>
              <p className=" font-semibold">Phone:</p>
              <p className="text-sm">{partnerDetail.contactInfo.phone}</p>
            </div>
            <div>
              <p className=" font-semibold">Address:</p>
              <p className="text-sm">{partnerDetail.contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contribution Details */}
      <div className="px-4 my-3 bg-transparent">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Contributions
        </h2>
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {partnerDetail.contributionDetails}
        </p>
      </div>

      {/* Associated Cohorts or Startups */}
      <div className="px-4 my-3 bg-transparent">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Associated Cohorts / Startups
        </h2>
        <ul className="list-disc list-inside">
          {partnerDetail.associatedEntities.map((entity, index) => (
            <li key={index} className="text-sm">
              {entity}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

ProgramPartnerDetails.layout = "Contentlayout";
export default ProgramPartnerDetails;
