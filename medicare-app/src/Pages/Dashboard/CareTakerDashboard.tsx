import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import OverviewTab from "./TabsContent/OverviewTab";
import ActivityTab from "./TabsContent/ActivityTab";
import CalenderTab from "./TabsContent/CalenderTab";
import NotificationsTab from "./TabsContent/NotificationsTab";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

const CareTakerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { userDetails } = useAuth();
  const [patients, setPatients] = useState({
    id: "",
    name: "",
    email: "",
  });

  const getAllPatients = async () => {
    const careTakerId = userDetails?.id;
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/caretaker/patients/${careTakerId}`
      );
      setPatients(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPatients();
  }, [userDetails?.id]);

  return (
    <div className=" flex flex-col items-center justify-center  mt-7 mb-7 mx-5 md:mx-26">
      <div className="bg-gradient-to-r from-[#22c55e] to-[#3b82f6] w-full   rounded-lg p-7">
        <div className="flex items-center">
          <div className="bg-white/20 rounded-xl w-14 h-14 flex justify-center items-center mr-2">
            <FiUsers className="" size={25} color="white" />
          </div>
          <div>
            <h1 className="text-3xl text-white font-semibold">
              Caretaker Dashboard
            </h1>
            <p className="text-lg text-white">
              {`Monitoring ${patients?.name}'s medication adherence`}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mt-5 text-white font-[500]">
          <div className="bg-white/20 rounded-xl p-3 ">
            <p className="text-2xl">85%</p>
            <p>Adherence Rate</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-2xl">5</p>
            <p>Current Streak</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-2xl">3</p>
            <p>Missed This Month</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-2xl">4</p>
            <p>Taken This Week</p>
          </div>
        </div>
      </div>

      <div className="text-sm grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 bg-gray-100 w-full py-2 px-1">
        <button
          className={`font-semibold py-2 px-3 cursor-pointer ${
            activeTab === "overview" ? "bg-white rounded-lg " : "text-[#64748b]"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`font-semibold py-2 px-3 cursor-pointer ${
            activeTab === "activity" ? "bg-white rounded-lg " : "text-[#64748b]"
          }`}
          onClick={() => setActiveTab("activity")}
        >
          Recent Activity
        </button>
        <button
          className={`font-semibold py-2 px-3 cursor-pointer ${
            activeTab === "calender" ? "bg-white rounded-lg " : "text-[#64748b]"
          }`}
          onClick={() => setActiveTab("calender")}
        >
          Calender View
        </button>
        <button
          className={`font-semibold py-2 px-3 cursor-pointer ${
            activeTab === "notifications"
              ? "bg-white rounded-lg "
              : "text-[#64748b]"
          }`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      <div className="mt-5 rounded-xl  mr-2 w-full grid grid-cols-12 gap-x-4 ">
        {activeTab == "overview" ? (
          <OverviewTab setActiveTab={setActiveTab} />
        ) : activeTab == "activity" ? (
          <ActivityTab />
        ) : activeTab == "calender" ? (
          <CalenderTab />
        ) : (
          <NotificationsTab patients={patients} />
        )}
      </div>
    </div>
  );
};

export default CareTakerDashboard;
