import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { cohortsList } from "./cohortsdata";

const Cohorts = () => {
	return (
		<Fragment>
			<Pageheader
				currentpage="Cohorts"
				activepage="Dashboards"
				mainpage="Cohort Management"
			/>
			<div className="box custom-card">
				<div className="box-header justify-between gap-8 border-b-2 border-white ">
					<h1 className="text-xl font-bold">Cohort List</h1>
					<button className="bg-green text-white px-4 py-2 rounded-md">
						<Link href="/cohort/cohorts/create">Create New Cohort</Link>
					</button>
				</div>

				<div className="box-body">
					<div className="overflow-x-auto">
						<table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
							<thead>
								<tr className="">
									<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Cohort Name
									</th>
									<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
									</th>
									<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    End Date
									</th>
									<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
									</th>
								</tr>
							</thead>
							<tbody className=" ">
								{cohortsList.map((cohort) => (
									<tr key={cohort.id}>
										<td className="px-6 py-4 whitespace-nowrap">
											{cohort.name}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											{cohort.startDate}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											{cohort.endDate}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex gap-4">
												<button className="text-primary hover:underline">
													<Link href={`/cohort/cohorts/${cohort.id}`}>
                            View Details
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

Cohorts.layout = "Contentlayout";

export default Cohorts;
