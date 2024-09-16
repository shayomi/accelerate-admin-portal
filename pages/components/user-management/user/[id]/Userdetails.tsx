import { useRouter } from "next/router";
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
  const router = useRouter();
  const { id } = router.query;

  // Define the user state with the appropriate type
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const userData = Userslists.find((u) => u.id === id);
      // Set user data or null if not found
      setUser(userData ?? null);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-detail-page">
      <h1>
        {user.name} - {user.role}
      </h1>

      <section>
        <h2>Personal Information</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Status:</strong> {user.status}
        </p>
      </section>

      <section>
        <h2>Activity Log</h2>
        <ul>
          {user.activityLog.map((activity, index) => (
            <li key={index}>
              <strong>{activity.date}:</strong> {activity.action}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Associated Entities</h2>
        <p>
          <strong>Investors:</strong>{" "}
          {user.associatedEntities.investors?.join(", ") || "None"}
        </p>
        <p>
          <strong>Advisors:</strong>{" "}
          {user.associatedEntities.advisors?.join(", ") || "None"}
        </p>
        <p>
          <strong>Partners:</strong>{" "}
          {user.associatedEntities.partners?.join(", ") || "None"}
        </p>
        <p>
          <strong>Founders:</strong>{" "}
          {user.associatedEntities.founders?.join(", ") || "None"}
        </p>
      </section>

      <button className="edit-button bg-blue-500 text-white py-2 px-4 mt-4 rounded">
        Edit User
      </button>
    </div>
  );
};

export default UserDetailPage;
