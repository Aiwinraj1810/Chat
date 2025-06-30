// src/components/Layout.jsx
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main className="p-4 text-white bg-[url('./src/assets/bgImage.svg')] bg-cover h-screen overflow-hidden">
        <Outlet /> {/* Renders the matched child route */}
      </main>
    </div>
  );
};

export default Layout;
