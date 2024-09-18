import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { partners } from "./partnerdata";

const ProgramPartner = () => {
  return (
    <Fragment>
      <Pageheader
        currentpage="Partner's List"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />
      <div className=" ">
        <div className="box custom-card">
          <div className="box-header justify-between gap-8">
            <div className="box-title">Program Partner</div>
            <button className="bg-primary text-white px-3 py-2 rounded-md">
              <Link href="/cohort/partner/create">Add New Partner</Link>
            </button>
          </div>

          <div className="box-body overflow-x-auto">
            <table className="table min-w-full">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y ">
                {partners.map((partner) => (
                  <tr key={partner.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-black/50 hs-dark-mode-active:text-white">
                      {partner.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black/50 hs-dark-mode-active:text-white">
                      {partner.type}
                    </td>
                    <td
                      className={
                        partner.status === "Active"
                          ? "text-green"
                          : "text-yellow"
                      }
                    >
                      {partner.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black/50">
                      <div className="flex gap-4">
                        <button className="bg-transparent border-[1px] border-primary hs-dark-mode-active:bg-white hs-dark-mode-active:border-none  text-primary  px-3 py-1.5 rounded-md">
                          <Link href={`/cohort/partner/${partner.id}`}>
                            View
                          </Link>
                        </button>
                        <button className="text-primary hover:underline">
                          <Link href={`/cohort/partner/edit/${partner.id}`}>
                            Edit
                          </Link>
                        </button>
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
              <nav aria-label="Page navigation" className="pagination-style-4">
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
    </Fragment>
  );
};

ProgramPartner.layout = "Contentlayout";
export default ProgramPartner;
