import Link from "next/link";
import React, { Fragment } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { authorsList } from "./authordata";


const Authors = () => {
  return (
    <Fragment>
      <Seo title={"Authors Management"} />
      <Pageheader
        currentpage="Authors List"
        activepage="Dashboards"
        mainpage="Authors Management"
      />

      {/* Header Actions */}
      <div className="box custom-card">
        <div className="box-header justify-between gap-8 border-b-2 border-white ">
          <h1 className="text-xl font-bold">Cohort List</h1>
          <button className="bg-green px-3 py-2 rounded-md">
            <Link href="/authors/create"> Create New Author</Link>
          </button>
        </div>

        {/* Table */}
        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead>
                <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                  <th className="!text-start !text-[0.85rem] min-w-[200px]">
                    First Name
                  </th>
                  <th className="!text-start !text-[0.85rem] min-w-[200px]">
                    Last Name
                  </th>
                  <th className="!text-start !text-[0.85rem]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {authorsList.map((author) => (
                  <tr
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    key={author.id}
                  >
                    <td className="!text-start">{author.firstName}</td>
                    <td className="!text-start">{author.lastName}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <Link href={`authors/view/${author.id}`}>
                          <button className="bg-transparent border-[1px] border-primary hs-dark-mode-active:bg-[#ffffff] hs-dark-mode-active:border-none text-primary px-4 py-2 rounded-md">
                            View
                          </button>
                        </Link>
                        <Link href={`authors/edit/${author.id}`}>
                          <button className="text-primary hover:underline">
                            Edit
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
    </Fragment>
  );
};

Authors.layout = "Contentlayout";
export default Authors;
