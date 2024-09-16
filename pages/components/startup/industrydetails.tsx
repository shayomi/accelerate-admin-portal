import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";

const IndustryDetails = () => {
  const [name, setName] = useState<string>("");
  const [slug, setSlug] = useState<string>("industry-slug"); // Example slug
  const [selectedStartups, setSelectedStartups] = useState<
    { id: string; name: string }[]
  >([
    { id: "1", name: "Startup One" },
    { id: "2", name: "Startup Two" },
    { id: "3", name: "Startup Three" },
  ]);

  const handleRemoveStartup = (id: string) => {
    setSelectedStartups((prevStartups) =>
      prevStartups.filter((startup) => startup.id !== id)
    );
  };

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <Fragment>
      <Seo title={"Industry Details"} />
      <Pageheader
        currentpage="Industry Details"
        activepage="Dashboards"
        mainpage="Industry"
      />

      <div className="">
        <div className="box custom-card">
          <div className="box-body">
            <div className="grid grid-cols-12 gap-6">
              <div className="xl:col-span-6 col-span-12 mb-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Industry Name"
                  aria-label="Industry Name"
                />
              </div>
              <div className="xl:col-span-6 col-span-12 mb-4">
                <label className="form-label">Slug</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="form-control"
                    value={slug}
                    readOnly
                    aria-label="Slug"
                  />
                  <button
                    type="button"
                    className="ml-2 btn btn-red"
                    onClick={() =>
                      setSlug(name.replace(/\s+/g, "-").toLowerCase())
                    }
                  >
                    Refresh
                  </button>
                </div>
              </div>
              <div className="xl:col-span-12 col-span-12 mb-4">
                <label className="form-label">Startups</label>
                <div className="flex flex-wrap gap-2">
                  {selectedStartups.map((startup) => (
                    <div
                      key={startup.id}
                      className="bg-[#E7D052E5] rounded-md text-gray-800 py-1 px-3 rounded flex items-center space-x-2"
                    >
                      <span>{startup.name}</span>
                      <button
                        type="button"
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleRemoveStartup(startup.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-12 col-span-12">
                <button
                  type="button"
                  className="ti-btn ti-btn-primary-full !mb-0"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

IndustryDetails.layout = "Contentlayout";

export default IndustryDetails;
