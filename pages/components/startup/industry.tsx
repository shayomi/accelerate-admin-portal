import React, { Fragment } from "react";
import Link from "next/link";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

// Industry data with 5 entries
export const IndustriesList = [
  {
    id: 1,
    name: "Technology",
    startupIds:[1,2]
  },
  {
    id: 2,
    name: "Healthcare",
    startupIds:[1,2]
  },
  {
    id: 3,
    name: "Finance",
    startupIds:[1,2]
  },
  {
    id: 4,
    name: "Real Estate",
    startupIds:[1,2]
  },
  {
    id: 5,
    name: "Education",
    startupIds:[1,2]
  },
];

const Industry = () => {
  return (
    <Fragment>
      <Seo title={"Startup Management"} />
      <Pageheader
        currentpage="Industry"
        activepage="Dashboards"
        mainpage="Startups"
      />
     

      <div className="">
        <div className="box custom-card">
          <div className="box-header justify-between gap-8">
            <div className="box-title">Industries List</div>
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  className="ti-form-control form-control-sm"
                  type="text"
                  placeholder="Search Here"
                  aria-label=".form-control-sm example"
                />
              </div>
              <div>
                <Link href="/startup/industry/create">
                  <button className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-3 !text-[0.75rem]">
                    Create New Industry
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="box-body">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel1"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <th
                      scope="col"
                      className="!text-start !text-[0.85rem] min-w-[200px]"
                    >
                      Industry Name
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {IndustriesList.map((industry) => (
                    <tr
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      key={industry.id}
                    >
                      <th scope="row" className="!ps-4 !pe-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                      </th>
                      <td>{industry.name}</td>
                      <td>
                        <div className="flex flex-row gap-4">
                          <Link href={`/startup/industry/edit/${industry.id}`}>
                            <button className="bg-yellow text-black rounded-md px-4 py-2 ">
                              Edit
                            </button>
                          </Link>

                          
                            <button className="text-primary hover:underline">
                              Delete
                            </button>
                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Industry.layout = "Contentlayout";

export default Industry;
