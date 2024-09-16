import Pageheader from "@/shared/layout-components/page-header/pageheader";
import React, { Fragment } from "react";

interface Startup {
  id: string;
  name: string;
  industry: string;
}

interface CohortDetailProps {
  cohort: {
    id: string;
    name: string;
    shortName: string;
    startDate: string;
    endDate: string;
    description: string;
    startups: Startup[];
    schedule: string; // A brief overview or description of the schedule
  };
}

const CohortDetail = () => {
  // Mock cohort data for the example
  const cohort = {
    id: "1",
    name: "Accelerate Africa 2024 Cohort",
    shortName: "AA 24",
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    description:
      "The Spring 2024 Cohort focuses on scaling tech startups with an emphasis on sustainable practices.",
    startups: [
      { id: "1", name: "Startup Alpha", industry: "Fintech" },
      { id: "2", name: "Startup Beta", industry: "HealthTech" },
      { id: "3", name: "Startup Gamma", industry: "EdTech" },
    ],
    schedule:
      "The program runs from March to June, with weekly mentor sessions and bi-monthly investor pitch meetings.",
  };

  return (
    <Fragment>
      <Pageheader
        currentpage="Cohort Details"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />
      <div className="box custom-card">
        <div className="box-header gap-8">
          <div className="box-title">Cohort's Details</div>
        </div>
        <div className="box-body">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Name:
                </label>
                <p className="text-sm">{cohort.name}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Short Name:
                </label>
                <p className="text-sm bg-[#E7D0524D]/30 px-2 py-1 rounded-md w-24">
                  {cohort.shortName}
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Start Date:
                </label>
                <p className="text-sm">{cohort.startDate}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  End Date:
                </label>
                <p className="text-sm">{cohort.endDate}</p>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700">
                  Description:
                </label>
                <p className="text-sm mt-4">{cohort.description}</p>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Enrolled Startups</h2>
            <table className="table min-w-full border border-gray-300 rounded-md">
              <thead className="bg-gray-100 hs-dark-mode-active:bg-[#1a1e25] ">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-primary uppercase tracking-wider">
                    Startup Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-primary uppercase tracking-wider">
                    Industry
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white hs-dark-mode-active:bg-[#1a1e25]  divide-y divide-gray-200">
                {cohort.startups.map((startup) => (
                  <tr key={startup.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {startup.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {startup.industry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">
              Program Schedule Overview
            </h2>
            <p className="text-sm">{cohort.schedule}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CohortDetail.layout = "Contentlayout";
export default CohortDetail;
