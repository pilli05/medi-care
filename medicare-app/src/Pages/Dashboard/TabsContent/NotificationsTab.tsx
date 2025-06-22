import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Switch from "react-switch";

interface NotificationProps {
  patients: { id: string; name: string; email: string };
}

const NotificationsTab: React.FC<NotificationProps> = ({ patients }) => {
  const [emailChecked, setEmailChecked] = useState(false);
  const [notificationChecked, setNotificationChecked] = useState(false);
  const [timeFrequency, setTimeFrequency] = useState("1");
  const [time, setTime] = useState("08:00");

  const handleEmailAlert = (nextChecked: boolean) => {
    setEmailChecked(nextChecked);
  };

  const handleNotificationAlert = (nextChecked: boolean) => {
    setNotificationChecked(nextChecked);
  };

  const handleTimeFrequency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeFrequency(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <>
      <div className="col-span-12 bg-white p-5 md:p-10 rounded-lg mb-2 border border-gray-300">
        <p className="text-2xl font-semibold flex items-center">
          <IoMdNotificationsOutline className="mr-2" color="blue" />
          Notification Preferences
        </p>
        <div className="flex justify-between items-center mt-5 border-b border-b-gray-300 pb-5">
          <div>
            <p className="text-[#020817] font-[600]">Email Notifications</p>
            <p className="text-[#64748b] text-sm mt-1">
              Receive medication alerts via email
            </p>
          </div>
          <Switch
            onChange={handleEmailAlert}
            checked={emailChecked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#000"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-[#020817] font-[600]">
                Missed Medication Alerts
              </p>
              <p className="text-[#64748b] text-sm mt-1">
                Get notified when medication is not taken on time
              </p>
            </div>
            <Switch
              onChange={handleNotificationAlert}
              checked={notificationChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#000"
            />
          </div>
          <div className="pl-10 mt-5">
            <div>
              <p className="text-[#020817] text-sm font-[600]">
                Alert me if medication isn't taken within
              </p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mt-2 w-full"
                onChange={handleTimeFrequency}
                value={timeFrequency}
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
              </select>
            </div>
            <div className="mt-5">
              <p className="text-[#020817] text-sm font-[600]">
                Daily reminder time
              </p>
              <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mt-2 w-full">
                <input type="time" value={time} onChange={handleTimeChange} />
              </div>
              <p className="text-[#64748b] text-xs mt-1">
                Time to check if today's medication was taken
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 bg-white p-5 md:p-10 rounded-lg mb-2 border border-gray-300 mt-5">
        <p className="text-2xl font-semibold flex items-center">
          <MdOutlineEmail className="mr-2" color="green" />
          Email Preview
        </p>
        <div className="bg-[#f7fdff] mt-5 border border-gray-300 p-5 rounded">
          <p className="text-[#020817] text-sm font-[600]">
            {`Subject: Medication Alert - ${patients.name}`}
          </p>
          <p className="text-[#64748b] text-sm my-2">Hello,</p>
          <p className="text-[#64748b] text-sm my-2">
            {`This is a reminder that ${patients.name} has not taken her
            medication today.`}
          </p>
          <p className="text-[#64748b] text-sm my-2">
            Please check with her to ensure she takes her prescribed medication.
          </p>
          <p className="text-[#64748b] text-sm my-2">
            Current adherence rate: 85% (5-day streak)
          </p>
        </div>
      </div>
      <div className="col-span-12 flex justify-end ">
        <button
          className="bg-[#16a34a] text-white rounded-md px-3 py-2 text-sm font-[500] mt-3 cursor-pointer"
          onClick={() => alert("Notification settings sent successfully")}
        >
          Save Notification Settings
        </button>
      </div>
    </>
  );
};

export default NotificationsTab;
