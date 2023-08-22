import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchCarPage from "./pages/SearchCarPage";
import CarDetailPage from "./pages/CarDetailPage";
import React, { useEffect } from "react";
import PaymentPage1 from "./pages/PaymentPage1";
import PaymentPage2 from "./pages/PaymentPage2";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ETicketPage from "./pages/ETicketPage";
import LoginAdminPage from "./pages/admin/LoginAdminPage";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";

const App = () => {
  function ProjectTitle() {
    useEffect(() => {
      document.title = "Binar Car Rent";
    }, []);
  }
  return (
    <div>
      <ProjectTitle />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route />
        <Route path="/" element={<HomePage />} />
        <Route path="/search-car" element={<SearchCarPage />} />
        <Route path="/car-detail/:id/" element={<CarDetailPage />} />
        <Route path="/payment1/:id/" element={<PaymentPage1 />} />
        <Route path="payment2/:id/" element={<PaymentPage2 />} />
        <Route path="/e-ticket/:id/" element={<ETicketPage />} />
        <Route path="/login-admin" element={<LoginAdminPage />} />
        <Route path="/admin-dashboard" element={<DashboardAdminPage/>} />
      </Routes>
    </div>
  );
};

export default App;
