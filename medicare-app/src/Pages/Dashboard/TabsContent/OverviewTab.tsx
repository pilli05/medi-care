import { CiCalendar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

interface OverviewProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const OverviewTab: React.FC<OverviewProps> = ({ setActiveTab }) => {
  return (
    <>
      <div className="col-span-12 md:col-span-6 bg-white p-5 md:p-10 rounded-lg mb-2 border border-gray-300">
        <p className="text-2xl font-semibold flex items-center">
          <CiCalendar className="mr-2 text-3xl font-bold" color="blue" />
          Today's Status
        </p>

        <div className="flex justify-between items-center mt-5 mb-5 bg-[#f8fdff] rounded-lg p-5 hover:shadow-md duration-200 ">
          <div className="flex">
            <div className="">
              <p className="text-[#020817] font-[600]">Daily Medication Set</p>
              <p className="text-[#64748b]">8:00 AM</p>
            </div>
          </div>
          <p className="bg-red-500 text-[0.75rem] font-semibold px-3 text-white py-1 rounded-full flex items-center">
            Pending
          </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 bg-white p-10 rounded-lg mb-2 border border-gray-300">
        <p className="text-2xl font-semibold text-[#020217]">Quick Actions</p>

        <div
          className="flex items-center mt-4 border border-gray-300 px-4 py-3 rounded-lg cursor-pointer"
          onClick={() => alert("Reminder email sent to Eleanor Thompson")}
        >
          <p className="text-[#020817] text-sm font-semibold  flex items-center">
            <MdOutlineEmail className="mr-2" size={20} /> Send Remainder Email
          </p>
        </div>
        <div
          className="flex items-center mt-2 border border-gray-300 px-4 py-3 rounded-lg cursor-pointer"
          onClick={() => setActiveTab("notifications")}
        >
          <p className="text-[#020817] text-sm font-semibold flex items-center">
            <IoMdNotificationsOutline className="mr-2" size={20} /> Configure
            Notifications
          </p>
        </div>
        <div
          className="flex items-center mt-2 border border-gray-300 px-4 py-3 rounded-lg cursor-pointer"
          onClick={() => setActiveTab("calender")}
        >
          <p className="text-[#020817] text-sm font-semibold  flex items-center ">
            <CiCalendar className="mr-2" size={20} /> View Full Calender
          </p>
        </div>
      </div>
      <div className="col-span-12 bg-white p-10 rounded-lg mb-2 border border-gray-300">
        <p className="text-2xl font-semibold">Monthly Adherence Progress</p>

        <div className="flex justify-between items-center mt-5 mb-5 ">
          <p className="text-[#020817]">Overall Progress</p>
          <p className=" text-[#020817] ">85%</p>
        </div>

        <div className="bg-[#e9f5fa] w-full h-3 rounded-full">
          <div className="bg-[#0f172a] w-[85%] h-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 mt-5 gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#16a34a] font-[500]">22 days</p>
            <p className="text-[#64748b] text-sm">Taken</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#dc2626] font-[500]">3 days</p>
            <p className="text-[#64748b] text-sm">Missed</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#2563eb] font-[500]">5 days</p>
            <p className="text-[#64748b] text-sm">Remaining</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
