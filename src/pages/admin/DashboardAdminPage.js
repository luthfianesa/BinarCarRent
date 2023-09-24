import "../pages.css";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Sidebar from "../../components/admin/Sidebar";
import DashboardGraph from "../../components/admin/DashboardGraph";

const DashboardAdminPage = () => {
  return (
    <div className="dashboardAdminPage-container">
      <NavbarAdmin />
      <div className="sidebarAndGraph-container">
        <Sidebar />
        <DashboardGraph />
      </div>
    </div>
  );
};

export default DashboardAdminPage;
