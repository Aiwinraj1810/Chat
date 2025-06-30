// src/routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import LoginPage from "../pages/Loginpage";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
