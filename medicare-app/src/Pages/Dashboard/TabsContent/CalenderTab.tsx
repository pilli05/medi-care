import { useState } from "react";
import Calendar from "react-calendar";
import { MdAccessTime } from "react-icons/md";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderTab = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="col-span-12 bg-white p-5 md:p-10 rounded-lg mb-2 border border-gray-300">
      <p className="text-2xl font-semibold flex items-center">
        Medication Calendar Overview
      </p>
      <div className="p-5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            // tileClassName={({ date, view }) => {
            //   if (view === "month") {
            //     const dateStr = moment(date).format("YYYY-MM-DD");
            //     const log = medicationDone.find(
            //       (log: { date_taken: string; taken: number }) =>
            //         log.date_taken === dateStr
            //     );

            //     if (log?.taken === 1) return "taken-pill";
            //     if (log && log.taken === 0) return "missed-pill";
            //     if (moment().isSame(date, "day")) return "today-pill";
            //   }
            //   return null;
            // }}
          />

          <div className="flex items-center mt-5">
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
        <div>
          <p className="text-[#020817] font-semibold">
            Details for June 22, 2025
          </p>
          <div className="bg-[#eff6ff] rounded-lg p-5 mt-5 border border-[#d5e0fc] ">
            <p className="text-[#1e40af] font-semibold flex items-center">
              <MdAccessTime className="mr-2" size={20} /> Today
            </p>
            <p className="text-sm text-[#1d4ed8] mt-2">
              Monitor Eleanor Thompson's medication status for today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderTab;
