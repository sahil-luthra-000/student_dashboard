import React, { useState } from "react";
import { FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const DashBoardHeader = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="">
        {/* Sidebar Toggle Button */}
        <button
          className="mr-2 p-2 rounded bg-gray-200 hover:bg-gray-300 transition-all"
          onClick={() => setVisible((prev) => !prev)}
        >
          ☰
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600" />
        <FaCog className="text-gray-600" />
        <button
          className="text-gray-600 flex items-center"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-1" /> Logout
        </button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
