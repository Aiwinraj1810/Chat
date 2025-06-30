import assets from "../assets/assets";
import { userDummyData } from "../assets/assets";
import UserCard from "./UserCard";

const Sidebar = () => {
  return (
    <div className="border-r-1 rounded-2xl flex flex-col gap-4 py-2">
      <header className="flex items-center gap-4">
        <div className="w-3/4 overflow-hidden">
          <img
            src={assets.logo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/4 h-6 overflow-hidden">
          <img
            src={assets.menu_icon}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      <main className="h-[80vh] overflow-y-auto overflow-hidden">
        {userDummyData.map((item) => (
          <UserCard
            key={item._id}
            profilePic={item.profilePic}
            userName={item.fullName}
            userStatus={"Active"}
          />
        ))}
      </main>
    </div>
  );
};

export default Sidebar;
