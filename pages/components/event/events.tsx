import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";

const eventsData = [
  {
    name: "Tech Conference",
    date: "2024-09-15",
    location: "New York",
    status: "Upcoming",
    registrations: 150,
  },
  {
    name: "Startup Summit",
    date: "2024-08-30",
    location: "San Francisco",
    status: "Ongoing",
    registrations: 300,
  },
  {
    name: "Developer Meetup",
    date: "2024-07-20",
    location: "Chicago",
    status: "Past",
    registrations: 120,
  },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    const matchesStatus = filterStatus ? event.status === filterStatus : true;
    const matchesLocation = filterLocation
      ? event.location.includes(filterLocation)
      : true;
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesLocation && matchesSearch;
  });

  return (
    <Fragment>
      <Seo title="Events Management" />
      <Pageheader
        currentpage="Events"
        activepage="Dashboards"
        mainpage="Event Management"
      />

      <div className="box custom-card">
        <div className="box-header flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Events</h1>
          <button className="bg-green text-white py-2 px-4 rounded-md">
            Create New Event
          </button>
        </div>

        <div className="flex flex-col md:flex-row px-4  gap-4 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by event name"
            className="form-control"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-control"
          >
            <option value="">All Statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Past">Past</option>
          </select>

          <input
            type="text"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            placeholder="Filter by location"
            className="form-control"
          />
        </div>

        {/* Events Table */}
        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="">
                  <th className="p-2">Event Name</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Registrations</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{event.name}</td>
                    <td className="p-2">{event.date}</td>
                    <td className="p-2">{event.location}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          event.status === "Upcoming"
                            ? "text-green"
                            : event.status === "Ongoing"
                            ? "text-yellow"
                            : "text-primary"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="p-2">{event.registrations}</td>
                    <td className="p-2 flex flex-row gap-4">
                      <button className="border-[1px] border-primary hs-dark-mode-active:bg-[#ffffff] hs-dark-mode-active:border-none text-primary bg-transparent px-3 py-1.5 rounded-md">
                        View
                      </button>
                      <button className="text-primary hover:underline">
                        Edit
                      </button>
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
          <div className="text-white">
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
                    Next
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

Events.layout = "Contentlayout";

export default Events;
