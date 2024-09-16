import { PartnersList } from "@/shared/data/dashboards/applicationdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const ApplicationDetail = () => {
  // Assume we're displaying the first partner in the list
  const partner = PartnersList[0];

  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectReason, setShowRejectReason] = useState(false);

  const handleApprove = () => {
    // Approve logic here
    alert("Application Approved");
  };

  const handleReject = () => {
    // Reject logic here
    setShowRejectReason(true);
  };

  const handleSubmitRejection = () => {
    // Submit rejection logic here
    alert(`Application Rejected. Reason: ${rejectionReason}`);
  };

  return (
    <Fragment>
      <Seo title={"DApplication Mangemet"} />
      <Pageheader
        currentpage="Partner Detail"
        activepage="Partners"
        mainpage="Dashboard"
      />

      <div className="">
        <div className="bg-white hs-dark-mode-active:bg-[#1a1e25] rounded-md overflow-hidden">
          <div className="box-body !p-0">
            {/* Profile Header */}
            <div className="md:flex items-start md:items-center p-6 bg-[#E3E4E8]">
              <div>
                <span className="avatar avatar-xxl avatar-rounded online me-4">
                  <img src="../../../assets/images/faces/9.jpg" alt="" />
                </span>
              </div>
              <div className="flex-grow main-profile-info">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center !justify-between">
                  <div>
                    <h6 className="font-semibold mb-1 text-black text-[1rem]">
                      {partner.name}
                    </h6>
                    <p className="mb-1 !text-black opacity-[0.7]">
                      {partner.partnerType}
                    </p>
                    <p className="text-[0.75rem] text-black mb-6 opacity-[0.5]">
                      <span className="me-4 inline-flex">
                        <i className="ri-building-line me-1 align-middle"></i>
                        {partner.company}
                      </span>
                      <span className="inline-flex">
                        <i className="ri-calendar-line me-1 align-middle"></i>
                        Applied on {partner.dateApplied}
                      </span>
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[.9375rem] text-black mb-2 me-6 font-semibold">
                      Contact Information :
                    </p>
                    <div className="text-black ">
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-black/50 dark:text-white/50">
                          <i className="ri-mail-line align-middle text-[.875rem] text-black/50 dark:text-white/50"></i>
                        </span>
                        contact@{partner.company.toLowerCase()}.com
                      </p>
                      <p className="mb-0 text-black">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-black/50 dark:text-white/50">
                          <i className="ri-map-pin-line align-middle text-[.875rem] text-black/50 dark:text-white/50"></i>
                        </span>
                        Address: 123 Main St, City, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Bio */}
            <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
              <div className="mb-6">
                <p className="text-[.9375rem] mb-2 font-semibold text-black hs-dark-mode-active:text-white">
                  Company Details :
                </p>
                <p className="text-[0.75rem] text-black/50 dark:text-white/50 opacity-[0.7] mb-0">
                  {partner.companyDetails}
                </p>
              </div>
            </div>

            {/* Supporting Documents */}
            <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
              <p className="text-[.9375rem] mb-2 font-semibold">
                Supporting Documents :
              </p>
              <div className="mb-0">
                {partner.supportingDocuments.map((doc, index) => (
                  <p className="mb-1" key={index}>
                    <a href={`#${doc}`} className="text-primary">
                      <u>{doc}</u>
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Timeline of Actions */}
            <div className="p-6">
              <p className="text-[.9375rem] mb-2 me-6 font-semibold">
                Timeline of Actions :
              </p>
              <ul className="list-group">
                {partner.actions.map((action, idx) => (
                  <li className="list-group-item" key={idx}>
                    <div className="sm:flex items-start">
                      <div className="sm:ms-2 ms-0 sm:mt-0 mt-1 font-semibold flex-grow flex-row gap-2 items-center">
                        <p className="mb-0 leading-none">{action.actionType}</p>
                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7]">
                          {action.date}
                        </span>
                      </div>
                      {action.reason && (
                        <p className="text-black text-[.6875rem]">
                          Reason: {action.reason}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed">
              <p className="text-[.9375rem] mb-2 me-6 font-semibold">
                Actions :
              </p>
              <div className="flex items-center mb-2">
                <button className="ti-btn ti-btn-success me-2">Approve</button>
                <button className="ti-btn ti-btn-danger">Reject</button>
              </div>
              <textarea
                placeholder="Reason for rejection (if any)"
                className="form-textarea w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ApplicationDetail.layout = "Contentlayout";
export default ApplicationDetail;
