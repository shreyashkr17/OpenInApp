import React from "react";
import "./css/dashboard.css";
import { UserAuth } from "../context/AuthContext";
import LeftNavbar from "../components/LeftNavbar";
import DashboardUnit from "../components/DashboardUnit";

const Dashboard = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="dashboard">
      <LeftNavbar />
      <DashboardUnit />
    </div>
  );
};

export default Dashboard;
