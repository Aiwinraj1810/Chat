import React from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSideBar from "../components/RightSideBar";

const Homepage = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-4 backdrop-blur-2xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full relative">
      <div className="grid grid-cols-9 gap-2">
        <div className="col-span-2 py-4">
          <Sidebar />
        </div>
        <div className="col-span-5">
          <ChatContainer />
        </div>
        <div className="col-span-2">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
