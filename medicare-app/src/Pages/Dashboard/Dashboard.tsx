import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Header/Header";

import "./Dashboard.css";
import PatientDashboard from "./PatientDashboard";
import CareTakerDashboard from "./CareTakerDashboard";

const Dashboard: React.FC = () => {
  const { setUserDetails, userDetails } = useAuth();

  const getLoggedUserInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/auth/users/loggedUserInfo",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserDetails(response.data.userData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLoggedUserInfo();
  }, []);

  console.log(userDetails);

  return (
    <div className="">
      <Header />
      {userDetails?.role === "patient" ? (
        <PatientDashboard />
      ) : (
        <CareTakerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
