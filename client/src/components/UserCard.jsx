import React from "react";

const UserCard = ({ profilePic, userName, userStatus }) => {
  return (
    <div>
      <div className="h-16 flex gap-4 items-center py-8">
        <div className="h-10 rounded-full overflow-hidden w-10">
          <img src={profilePic} alt="profile" />
        </div>
        <div>
          <h4>{userName}</h4>
          <span className="text-sm">{userStatus}</span>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-3/4 h-[0.2px] bg-gray-600 " ></div>
      </div>
    </div>
  );
};

export default UserCard;
