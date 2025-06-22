import { CiCamera } from "react-icons/ci";

const ActivityTab = () => {
  return (
    <>
      <div className="col-span-12 bg-white p-5 md:p-10 rounded-lg mb-2 border border-gray-300">
        <p className="text-2xl font-semibold flex items-center">
          Recent Medication Activity
        </p>
        <div className="flex items-center justify-between border border-gray-200 p-5 mt-5 rounded-lg">
          <div className="flex items-center">
            <span className="bg-[#DBEAFE] p-2 w-10 h-10 rounded-full flex justify-center items-center text-[#3b82f6] ">
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
                className="lucide lucide-check w-5 h-5 text-green-600"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </span>
            <div className="ml-3">
              <p className="text-[#020817] font-[600]">Monday, June 10</p>
              <p className="text-[#64748b] text-sm">Taken at 8:30 AM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-1.5">
            <p className="text-[#0f172a] text-xs font-[500] border border-gray-200 px-2 py-1 rounded-full flex items-center">
              <CiCamera className="mr-1 font-semibold" size={15} />
              Photo
            </p>
            <p className="text-[#0f172a] text-xs font-[500] bg-[#f1f5f9] px-2 py-1 rounded-full">
              Completed
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border border-gray-200 p-5 mt-5 rounded-lg">
          <div className="flex items-center">
            <span className="bg-[#DBEAFE] p-2 w-10 h-10 rounded-full flex justify-center items-center text-[#3b82f6] ">
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
                className="lucide lucide-triangle-alert w-5 h-5 text-red-600"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </span>
            <div className="ml-3">
              <p className="text-[#020817] font-[600]">Saturday, June 8</p>
              <p className="text-[#64748b] text-sm">Medication missed</p>
            </div>
          </div>
          <p className="text-[#fff] text-xs font-[500] bg-red-500 px-2 py-1 rounded-full">
            Missed
          </p>
        </div>
        <div className="flex items-center justify-between border border-gray-200 p-5 mt-5 rounded-lg">
          <div className="flex items-center">
            <span className="bg-[#DBEAFE] p-2 w-10 h-10 rounded-full flex justify-center items-center text-[#3b82f6] ">
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
                className="lucide lucide-check w-5 h-5 text-green-600"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </span>
            <div className="ml-3">
              <p className="text-[#020817] font-[600]">Monday, June 10</p>
              <p className="text-[#64748b] text-sm">Taken at 8:30 AM</p>
            </div>
          </div>
          <p className="text-[#0f172a] text-xs font-[500] bg-[#f1f5f9] px-2 py-1 rounded-full">
            Completed
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityTab;
