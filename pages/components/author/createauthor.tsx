import React, { Fragment, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const CreateAuthor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission (e.g., send to API)
    console.log({
      firstName,
      lastName,
      profilePicture,
    });
  };

  return (
    <Fragment>
      <Seo title={"Create New Author"} />
      <Pageheader
        currentpage="Create Author"
        activepage="Dashboards"
        mainpage="Author Management"
      />
      <div className="box custom-card">
        <div className="">
          <div className=" box-header flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700">
              Create New Author
            </h1>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>

          {/* Form Layout */}
          <div className="box-body">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* First Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="form-control mt-1"
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="form-control mt-1"
                />
              </div>

              {/* Profile Picture Upload */}
              <div className="col-span-1 mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="form-control mt-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateAuthor.layout = "Contentlayout";
export default CreateAuthor;
