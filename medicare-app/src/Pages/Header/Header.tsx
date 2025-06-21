import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { FiUser } from "react-icons/fi";

const Header: React.FC = () => {
  const { userDetails } = useAuth();
  const role = userDetails && String(userDetails.role);

  return (
    <div className="bg-white flex justify-between px-46 items-center py-4 sticky top-0">
      <div className="flex items-center space-x-4">
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] p-2 px-3 rounded-lg text-white font-bold text-xl">
          M
        </span>
        <div>
          <p className="font-bold text-xl text-gray-700">MediCare Companion</p>
          <p className=" text-gray-400">
            {role === "patient" ? "Patient View" : "Caretaker View"}
          </p>
        </div>
      </div>
      <button className="border border-gray-300 px-3 py-2 rounded-lg text-sm font-semibold flex items-center">
        <FiUser className="mr-2" size={18} />
        {role === "patient" ? "Switch to Caretaker" : "Swith to Patient"}
      </button>
    </div>
  );
};

export default Header;
