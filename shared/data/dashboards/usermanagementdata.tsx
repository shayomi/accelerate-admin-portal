export const Userslists = [
  {
    id: "1",
    name: "Mayor Kelly",
    email: "mayorkelly@gmail.com",
    role: "Founder",
    status: "Active",
    checked: "",
    activityLog: [
      { date: "2024-08-21", action: "Created startup XYZ" },
      { date: "2024-09-02", action: "Joined as a mentor" },
    ],
    associatedEntities: {
      investors: ["Investor A", "Investor B"],
      advisors: ["Advisor X"],
      partners: ["Partner Y"],
    },
  },
  {
    id: "2",
    name: "Andrew Garfield",
    email: "andrewgarfield@gmail.com",
    role: "Advisor",
    status: "Active",
    checked: "defaultChecked",
    activityLog: [
      { date: "2024-07-19", action: "Joined as advisor for startup ABC" },
      { date: "2024-09-01", action: "Mentored Founder D" },
    ],
    associatedEntities: {
      founders: ["Founder C", "Founder D"],
    },
  },
  {
    id: "3",
    name: "Simon Cowel",
    email: "simoncowel234@gmail.com",
    role: "Investor",
    status: "Inactive",
    checked: "",
    activityLog: [
      { date: "2024-06-25", action: "Invested in startup 123" },
      { date: "2024-08-15", action: "Exited from startup XYZ" },
    ],
    associatedEntities: {
      founders: ["Founder F", "Founder E"],
    },
  },
  {
    id: "4",
    name: "Mirinda Hers",
    email: "mirindahers@gmail.com",
    role: "Partner",
    status: "Active",
    checked: "defaultChecked",
    activityLog: [
      { date: "2024-09-01", action: "Partnered with Founder Z" },
      { date: "2024-09-05", action: "Co-founded project DEF" },
    ],
    associatedEntities: {
      founders: ["Founder Z"],
    },
  },
  {
    id: "5",
    name: "Jacob Smith",
    email: "jacobsmith@gmail.com",
    role: "Founder",
    status: "Inactive",
    checked: "defaultChecked",
    activityLog: [
      { date: "2024-03-30", action: "Launched social platform" },
      { date: "2024-07-28", action: "Added new features to platform" },
    ],
    associatedEntities: {
      investors: ["Investor B"],
      advisors: ["Advisor Y"],
    },
  },
];
