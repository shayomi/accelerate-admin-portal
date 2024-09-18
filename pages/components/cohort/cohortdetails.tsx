import React, { Fragment } from 'react';
import Pageheader from '@/shared/layout-components/page-header/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import { Cohort } from '@/types';

interface CohortDetailProps {
  cohort: Cohort;
}

const CohortDetail: React.FC<CohortDetailProps> = ({ cohort }) => {
  return (
    <Fragment>
      <Seo title={`Cohort Details - ${cohort.name}`} />
      <Pageheader
        currentpage="Cohort Details"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />

      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">Name:</span>
            <p className="text-lg text-gray-700">{cohort.name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">
              Short Name:
            </span>
            <p className="text-lg text-gray-700 bg-yellow-200 px-2 py-1 rounded-md">
              {cohort.shortName}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">
              Start Date:
            </span>
            <p className="text-lg text-gray-700">{cohort.startDate}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">
              End Date:
            </span>
            <p className="text-lg text-gray-700">{cohort.endDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
          <p className="text-lg text-gray-700">{cohort.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Enrolled Startups
          </h2>
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Startup Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Industry
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cohort.startups.map((startup) => (
                <tr key={startup.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {startup.companyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {startup.industry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Program Schedule Overview
          </h2>
          <p className="text-lg text-gray-700">{cohort.schedule}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CohortDetail;
