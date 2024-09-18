"use client";

import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

const speakersData = [
	{ name: "Alice Johnson", company: "TechCorp", events: 5 },
	{ name: "Michael Brown", company: "InnovateX", events: 3 },
	{ name: "Sophia Davis", company: "DevHub", events: 4 },
	{ name: "James Lee", company: "StartupSphere", events: 2 },
];

const Speaker = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterCompany, setFilterCompany] = useState("");

	// Get unique companies for the dropdown
	const uniqueCompanies = Array.from(
		new Set(speakersData.map((speaker) => speaker.company)),
	);

	const filteredSpeakers = speakersData.filter((speaker) => {
		const matchesSearch = speaker.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesCompany = filterCompany
			? speaker.company === filterCompany
			: true;
		return matchesSearch && matchesCompany;
	});

	return (
		<Fragment>
			<Seo title="Speaker Management" />
			<Pageheader
				currentpage="Speakers List"
				activepage="Dashboards"
				mainpage="Event Management"
			/>

			{/* Main Card Container */}
			<div className="box custom-card">
				{/* Header */}
				<div className="box-header justify-between gap-8 mb-6">
					<div className="box-title text-3xl font-bold text-blue-700">
            Speakers
					</div>
					<button className="bg-green text-white px-3 py-1.5 rounded-md">
            Add New Speaker
					</button>
				</div>

				<div className="box-body mb-6 flex flex-row justify-end gap-2">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search by speaker name"
						className="form-control !text-[0.75rem] !py-2"
					/>

					<select
						value={filterCompany}
						onChange={(e) => setFilterCompany(e.target.value)}
						className="form-control !text-[0.75rem] !py-2"
					>
						<option value="">All Companies</option>
						{uniqueCompanies.map((company, index) => (
							<option key={index} value={company}>
								{company}
							</option>
						))}
					</select>
				</div>

				<div className="overflow-x-auto">
					<table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
						<thead>
							<tr className="border border-inherit border-solid dark:border-defaultborder/10">
								<th className="!text-start !text-[0.85rem] min-w-[200px] p-2">
                  Name
								</th>
								<th className="!text-start !text-[0.85rem] p-2">Company</th>
								<th className="!text-start !text-[0.85rem] p-2">
                  Events Participated
								</th>
								<th className="!text-start !text-[0.85rem] p-2">Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredSpeakers.map((speaker, index) => (
								<tr
									key={index}
									className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
								>
									<td className="p-2">{speaker.name}</td>
									<td className="p-2">{speaker.company}</td>
									<td className="p-2">{speaker.events}</td>
									<td className="p-2">
										<div className="flex flex-row gap-4 items-center">
											<button className="bg-transparent border-[1px] border-primary hs-dark-mode-active:bg-[#ffffff] hs-dark-mode-active:border-none text-primary px-3 py-1.5 rounded-md">
                        Edit
											</button>
											<button className="text-red px-3 py-1.5">Remove</button>
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
									<button className="page-link">Prev</button>
								</li>
								<li className="page-item">
									<button className="page-link active">1</button>
								</li>
								<li className="page-item">
									<button className="page-link">2</button>
								</li>
								<li className="page-item">
									<button className="page-link text-primary">Next</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Speaker.layout = "Contentlayout";

export default Speaker;
