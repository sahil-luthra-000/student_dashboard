import React, { useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaUsers,
  FaComments,
  FaCog,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="bg-[#101828] text-white w-64 min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 flex items-center"> Dashboard</h2>
      <ul className="flex-1">
        <li className="mb-4 flex items-center">
          <FaHome className="mr-2" />{" "}
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaUser className="mr-2" />{" "}
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaFileAlt className="mr-2" />{" "}
          <Link to="/edit-profile" className="hover:underline">
            Edit Profile
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaUsers className="mr-2" />{" "}
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaComments className="mr-2" />{" "}
          <Link to="/comments" className="hover:underline">
            Comments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
