import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Header/Header";
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import { IoTimeOutline } from "react-icons/io5";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard: React.FC = () => {
  const { setUserDetails, userDetails } = useAuth();
  const [value, onChange] = useState<Value>(new Date());
  const [medicationDone] = useState(false);
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

  console.log(userDetails);

  useEffect(() => {
    getLoggedUserInfo();
  }, []);
  return (
    <div className="">
      <Header />
      <div className=" flex flex-col items-center justify-center  mt-7 mb-7">
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] w-[68rem] rounded-lg p-7">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-xl w-14 h-14 flex justify-center items-center mr-2">
              <FiUser className="" size={25} color="white" />
            </div>
            <div>
              <h1 className="text-3xl text-white font-semibold">
                Good Morning!
              </h1>
              <p className="text-lg text-white">
                Ready to stay on track with your medication?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5 text-white font-[500]">
            <div className="bg-white/20 rounded-xl p-3 ">
              <p className="text-2xl">0</p>
              <p>Day Streak</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <p className="text-2xl">0</p>
              <p>Today's Status</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <p className="text-2xl">0%</p>
              <p>Monthly Rate</p>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-xl  mr-2 w-[68rem] grid grid-cols-12 gap-x-4">
          {medicationDone ? (
            <div className="col-span-8 bg-white p-10 rounded-lg mb-2">
              <p className="text-2xl font-semibold flex items-center">
                <CiCalendar className="mr-2 text-3xl font-bold" color="blue" />
                Today's Medication
              </p>

              <div className="bg-[#ecf9ff] flex flex-col items-center mt-5 mb-5 border-2 border-[#bbf7d0] rounded-lg p-5 hover:shadow-md duration-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check w-8 h-8 text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <p className="text-[#166534] font-semibold text-xl">
                  Medication Completed!
                </p>
                <p className="text-[#16a34a] text-base my-3">
                  Great job! You've taken your medication for June 21, 2025
                </p>
              </div>

              <div className="flex justify-between items-center mt-5 mb-5 border border-[#e5e7eb] rounded-lg p-5 hover:shadow-md duration-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check w-5 h-5 text-white"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-[#166534] font-semibold">
                      Daily Medication Set
                    </p>
                    <p className="text-[#16a34a] text-sm">
                      Complete set of daily tablets
                    </p>
                  </div>
                </div>
                <p className="border border-[#e5e7eb] text-[0.75rem] text-[#166534] font-semibold px-2 rounded-full bg-[#ecf9ff] flex items-center">
                  <IoTimeOutline className="mr-1 font-bold" size={15} /> 8:00 AM
                </p>
              </div>
            </div>
          ) : (
            <div className="col-span-8 bg-white p-10 rounded-lg mb-2">
              <p className="text-2xl font-semibold flex items-center">
                <CiCalendar className="mr-2 text-3xl font-bold" color="blue" />
                Today's Medication
              </p>

              <div className="flex justify-between items-center mt-5 mb-5 border border-[#e5e7eb] rounded-lg p-5 hover:shadow-md duration-200">
                <div className="flex">
                  <span className="bg-[#DBEAFE] p-2 w-10 h-10 rounded-full flex justify-center items-center text-[#3b82f6] ">
                    1
                  </span>
                  <div className="ml-3">
                    <p className="text-[#020817] font-[600]">
                      Daily Medication Set
                    </p>
                    <p className="text-[#64748b] text-sm">
                      Complete set of daily tablets
                    </p>
                  </div>
                </div>
                <p className="border border-[#e5e7eb] text-[0.75rem] font-semibold px-2 rounded-full flex items-center">
                  <IoTimeOutline className="mr-1 font-bold" size={15} /> 8:00 AM
                </p>
              </div>
              <div className="flex flex-col items-center mt-5 mb-5 border border-dashed border-[#e5e7eb] rounded-lg p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-image w-12 h-12 text-muted-foreground mx-auto mb-4"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                <p className="text-base font-semibold px-2 text-[#020217] my-2">
                  Add Proof Photo (Optinal)
                </p>
                <p className="text-sm text-[#64748B] mb-4">
                  Take a photo of your medication or pill organizer as
                  confirmation
                </p>
                <p className="border border-[#e5e7eb] text-sm text-[#020817] font-semibold p-2 rounded-lg flex items-center mb-7">
                  <MdOutlinePhotoCamera className="mr-2" size={20} /> Take Photo
                </p>
              </div>
              <button className="bg-[#22c55e] text-white text-lg p-2 px-4 rounded-lg font-semibold w-full flex items-center justify-center">
                <IoIosCheckmark className="mr-1" color="white" size={30} /> Mark
                as Taken
              </button>
            </div>
          )}
          <div className="col-span-4 bg-white p-10 rounded-lg mb-2">
            <p className="text-xl font-semibold text-[#020217]">
              Medication Calender
            </p>
            <Calendar onChange={onChange} value={value} />

            <div className="flex items-center mt-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <p className="text-[#202817] text-sm">Medication taken</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              <p className="text-[#202817] text-sm">Missed medication</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <p className="text-[#202817] text-sm">Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
