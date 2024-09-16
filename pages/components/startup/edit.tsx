"use client";

import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { ChangeEvent, Fragment, useState } from "react";

type OptionType = string;

const EditStartup = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<OptionType[]>(
    []
  );
  const [selectedFounders, setSelectedFounders] = useState<OptionType[]>([]);

  const industryOptions: OptionType[] = [
    "Tech",
    "Finance",
    "Healthcare",
    "Education",
  ];
  const founderOptions: OptionType[] = [
    "Alice Johnson",
    "Bob Smith",
    "Claire Adams",
    "David Lee",
  ];

  const handleIndustryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedIndustries.includes(selectedValue)) {
      setSelectedIndustries([...selectedIndustries, selectedValue]);
    }
  };

  const handleFounderChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedFounders.includes(selectedValue)) {
      setSelectedFounders([...selectedFounders, selectedValue]);
    }
  };

  // Remove a selected industry
  const removeIndustry = (industry: OptionType): void => {
    setSelectedIndustries(
      selectedIndustries.filter((item) => item !== industry)
    );
  };

  // Remove a selected founder
  const removeFounder = (founder: OptionType): void => {
    setSelectedFounders(selectedFounders.filter((item) => item !== founder));
  };

  return (
    <Fragment>
      <Seo title={"Startup Management"} />
      <Pageheader
        currentpage="Edit Startup"
        activepage="Dashboards"
        mainpage="Startupss"
      />
      <div className="">
        <div className="col-span-12">
          <div className="flex flex-row gap-4 justify-end">
            <button type="button" className="ti-btn ti-btn-primary-full">
              Save Changes
            </button>
            <button type="button" className="ti-btn ti-btn-primary-full">
              Publish
            </button>
          </div>
        </div>

        <div className="xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="col-span-12 mb-4">
              <label className="form-label mt-4">Company Logo</label>
              <div className="border-2 border-dashed bg-[#E3E4E8] hs-dark-mode-active:bg-[#1a1e25] p-6 text-center square-container w-[30%] h-48 flex flex-col gap-4 items-center mx-auto justify-center">
                <p className="mb-2">
                  Drag & drop your image here or click to upload
                </p>
                <input
                  type="file"
                  className="form-control flex justify-center"
                />
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter company name"
                minLength={2}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Slug</label>
              <div className="flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Auto-generated slug"
                />
                <button type="button" className="ti-btn ti-btn-light">
                  Refresh
                </button>
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter company email"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Location</label>
              <div className="grid grid-cols-12 sm:gap-x-4">
                <div className="xl:col-span-6 col-span-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="xl:col-span-6 col-span-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter website URL"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Size</label>
              <input
                type="number"
                className="form-control"
                placeholder="Number of employees"
              />
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Company Description</label>
              <textarea
                className="form-control"
                placeholder="Enter company description"
              ></textarea>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Fundraising Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Amount raised (if any)"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Valuation</label>
              <input
                type="number"
                className="form-control"
                placeholder="Company valuation"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Industries</label>
              <select
                className="form-select"
                onChange={handleIndustryChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select industries
                </option>
                {industryOptions.map((industry, idx) => (
                  <option key={idx} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>

              {/* Display selected industries */}
              <div className="mt-2">
                {selectedIndustries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
                  >
                    <span>{industry}</span>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => removeIndustry(industry)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Founders</label>
              <select
                className="form-select"
                onChange={handleFounderChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select founders
                </option>
                {founderOptions.map((founder, idx) => (
                  <option key={idx} value={founder}>
                    {founder}
                  </option>
                ))}
              </select>

              <div className="mt-2">
                {selectedFounders.map((founder, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
                  >
                    <span>{founder}</span>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => removeFounder(founder)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Year Founded</label>
              <input
                type="number"
                className="form-control"
                placeholder="Year founded"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Pitch Video Embed Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter pitch video link"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Pitch Deck Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter pitch deck link"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Calendly Embed Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter Calendly link"
              />
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Cohort</label>
              <select className="form-select">
                <option value="" disabled>
                  Select cohort
                </option>
                {/* Add cohort options dynamically */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditStartup.layout = "Contentlayout";

export default EditStartup;
