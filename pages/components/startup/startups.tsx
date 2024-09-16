import { StartupsList } from "@/shared/data/dashboards/startupsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";

const Startups = () => {
  return (
    <Fragment>
      <Seo title={"Startup Management"} />
      <Pageheader
        currentpage="Startups List"
        activepage="Dashboards"
        mainpage="Startup"
      />

      <div className="">
        <div className="box custom-card">
          <div className="box-header justify-between gap-8">
            <div className="box-title">Startups List</div>
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  className="ti-form-control form-control-sm"
                  type="text"
                  placeholder="Search Here"
                  aria-label=".form-control-sm example"
                />
              </div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                  aria-expanded="false"
                >
                  Filter By
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Industry
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Cohort
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="bg-green text-white px-3 py-1.5 rounded-md"
              >
                Create new startup
              </button>
            </div>
          </div>
          <div className="box-body">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th
                      scope="col"
                      className="!text-start !text-[0.85rem] min-w-[200px]"
                    >
                      Company Name
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Industry
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Cohort
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Founders
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Status
                    </th>

                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {StartupsList.map((startup) => (
                    <tr
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      key={startup.id}
                    >
                      <td>{startup.companyName}</td>
                      <td>{startup.industry}</td>
                      <td>{startup.cohort}</td>
                      <td>{startup.founders.join(", ")}</td>
                      <td
                        className={
                          startup.status === "Active"
                            ? "text-green"
                            : "text-yellow"
                        }
                      >
                        {startup.status}
                      </td>

                      <td>
                        <div className="flex flex-row gap-2">
                          <Link
                            href={`components/startup-management/startup/${startup.id}`}
                          >
                            <button className="text-primary hover:underline">
                              View
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box-footer">
            <div className="sm:flex items-center">
              <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                Showing 5 Entries{" "}
                <i className="bi bi-arrow-right ms-2 font-semibold"></i>
              </div>
              <div className="ms-auto">
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="ti-pagination mb-0">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#!">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" href="#!">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#!">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link !text-primary" href="#!">
                        next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Startups.layout = "Contentlayout";

export default Startups;
