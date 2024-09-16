"use client";

import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { ChangeEvent, Fragment, useState } from "react";

type OptionType = string;

const CreateAdvisor = () => {
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<OptionType[]>(
    []
  );
  const [advisorImage, setAdvisorImage] = useState<File | null>(null);

  const focusAreaOptions: OptionType[] = [
    "Corporate Strategy",
    "Marketing",
    "Finance",
    "Technology",
    "Leadership",
  ];

  const handleFocusAreaChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedFocusAreas.includes(selectedValue)) {
      setSelectedFocusAreas([...selectedFocusAreas, selectedValue]);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setAdvisorImage(e.target.files[0]);
    }
  };

  const removeFocusArea = (area: OptionType): void => {
    setSelectedFocusAreas(selectedFocusAreas.filter((item) => item !== area));
  };

  return (
    <Fragment>
      <Seo title={"Advisor Management"} />
      <Pageheader
        currentpage="Create Advisor"
        activepage="Dashboard"
        mainpage="Advisors"
      />
      <div className="">
        <div className="col-span-12">
          <div className="flex flex-row gap-4 justify-end">
            <button type="button" className="ti-btn ti-btn-primary-full">
              Save
            </button>
            <button
              type="button"
              className="border-[1px]  text-black bg-yellow px-3 py-1.5 rounded-md"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="col-span-12 mb-4">
              <label className="form-label mt-4">Image*</label>
              <div className="border-2 border-dashed p-6 bg-[#E6E6E6] hs-dark-mode-active:bg-[#1a1e25] text-center square-container w-[30%] h-48 flex flex-col gap-4 items-center mx-auto justify-center">
                <p className="mb-2">
                  Drag & drop your image here or click to upload
                </p>
                <input
                  type="file"
                  className="form-control flex justify-center"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter advisor's name"
                minLength={2}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Focus Area*</label>
              <select
                className="form-select"
                onChange={handleFocusAreaChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select focus areas
                </option>
                {focusAreaOptions.map((area, idx) => (
                  <option key={idx} value={area} className="w-[300px]">
                    {area}
                  </option>
                ))}
              </select>

              <div className="mt-2">
                {selectedFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
                  >
                    <span>{area}</span>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => removeFocusArea(area)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                placeholder="Enter advisor's bio"
                rows={6}
              ></textarea>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter company name"
              />
              <small className="text-gray-500">
                The company they work with
              </small>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Location (Country)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter country"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">LinkedIn Profile URL*</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter LinkedIn profile URL"
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Twitter Handle URL</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter Twitter handle URL"
              />
            </div>

            <div className="md:col-span-12 col-span-12 flex justify-end mb-6">
              <button
                type="button"
                className="border-[1px] text-primary bg-white px-3 py-1.5 rounded-md"
              >
                Save as draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateAdvisor.layout = "Contentlayout";

export default CreateAdvisor;
