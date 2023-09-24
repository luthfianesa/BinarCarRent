import "./sidebar.css";
import iconHomeDashboard from "../../assets/icon-home.svg";
import iconTruck from "../../assets/icon-truck.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="admin-sidebar">
        <div className="admin-blueSide">
          <div className="admin-blueSide-dashboard">
            <img src={iconHomeDashboard}></img>
            <h5>Dashboard</h5>
          </div>
          <div className="admin-blueSide-cars">
            <img src={iconTruck}></img>
            <h5>Cars</h5>
          </div>
        </div>
        <div className="admin-whiteSide">
          <h4>DASHBOARD</h4>
          <h4>Dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
