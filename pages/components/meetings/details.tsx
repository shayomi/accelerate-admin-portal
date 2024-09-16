import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

const MeetingDetail = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(
    null
  );

  // Sample data for a meeting (this would typically come from props or an API)
  const meeting = {
    id: "1",
    date: "2024-09-01",
    time: "10:00 AM",
    participants: "Alice, Bob",
    type: "Internal",
    summary:
      "This meeting focused on the project milestones and upcoming deadlines for Q4.",
    notes:
      "Discussed challenges in the frontend development process and the need for more resources. Action items include follow-up with the DevOps team and scheduling a client review.",
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setSubmittedFeedback(feedback);
      setFeedback("");
    }
  };

  return (
    <Fragment>
      <Seo title={`Meeting Detail - ${meeting.date}`} />
      <Pageheader
        currentpage="Meeting Detail"
        activepage="Dashboards"
        mainpage="Meeting"
      />

      <div className="box custom-card mt-4">
        <div className="box-header">
          <h3 className="box-title text-lg font-semibold">
            Meeting Information
          </h3>
        </div>

        <div className="box-body space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Date:</span> {meeting.date}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Time:</span> {meeting.time}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Participants:</span>{" "}
              {meeting.participants}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Meeting Type:</span>{" "}
              {meeting.type}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">Summary:</span> {meeting.summary}
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">Notes:</span> {meeting.notes}
          </div>
        </div>
      </div>

      <div className="box custom-card mt-4">
        <div className="box-header">
          <h3 className="box-title text-lg font-semibold">Feedback</h3>
        </div>

        <div className="box-body">
          {submittedFeedback ? (
            <div className="p-4 bg-gray-100 rounded-md">
              <p className="font-semibold">Submitted Feedback:</p>
              <p>{submittedFeedback}</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Provide your feedback about the meeting"
                value={feedback}
                onChange={handleFeedbackChange}
              />

              <button
                className=" ti-btn ti-btn-primary"
                onClick={handleFeedbackSubmit}
              >
                Submit Feedback
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

MeetingDetail.layout = "Contentlayout";

export default MeetingDetail;
