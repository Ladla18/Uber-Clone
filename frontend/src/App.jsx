import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import CaptainRegister from "./pages/CaptainRegister";
import CaptainLogin from "./pages/CaptainLogin";
import UserDashboard from "./pages/UserDashboard";
import UserProtectedRoute from "./pages/UserProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-signup" element={<CaptainRegister />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/user-dashboard" element={<UserProtectedRoute> <UserDashboard /> </UserProtectedRoute>}/>
    </Routes>
  );
};

export default App;
