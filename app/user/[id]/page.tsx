import { useRouter } from "next/navigation";
import { Userslists } from "@/shared/data/dashboards/usermanagementdata";
import React, { useEffect, useState } from "react";

// Define the User type
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  checked: string;
  activityLog: { date: string; action: string }[];
  associatedEntities: {
    investors?: string[];
    advisors?: string[];
    partners?: string[];
    founders?: string[];
  };
};

const UserDetailPage = () => {
  return <div className="user-detail-page"></div>;
};

export default UserDetailPage;
