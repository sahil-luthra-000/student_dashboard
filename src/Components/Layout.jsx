import React, { useState } from "react";
import SideBar from "../Pages/SideBar";
import DashBoardHeader from "./DashBoardHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex flex-col h-screen ">
      {/* Main Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 bg-[#101828] ${
            visible ? "w-64" : "w-0"
          }`}
        >
          {visible && <SideBar />}
        </div>

        <div className="flex flex-col flex-1">
          {/* Header */}
          <DashBoardHeader visible={visible} setVisible={setVisible} />

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-4 bg-gray-100">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
