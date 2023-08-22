// Sidebar.js
import "./sidebar.css";
import iconSearch from "../../assets/icon-search.svg";
import iconHomeDashboard from "../../assets/icon-home.svg";
import iconTruck from "../../assets/icon-truck.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const goAdminDashboard = () => {
    return navigate("/admin-dashboard");
  };

  return (
    <div className="sidebar-container">
      <div className="admin-navbar">
        <div className="admin-navbar-leftSide">
          <div className="admin-navbar-square-outer">
            <div className="admin-navbar-square-inner"></div>
          </div>
          <a href="/admin-dashboard" onClick={goAdminDashboard}>
            <div className="admin-navbar-rectangle"></div>
          </a>
        </div>
        <div className="admin-navbar-rightSide">
          <div className="admin-navbar-input">
            <img src={iconSearch} alt="search icon"></img>
            <input placeholder="Search Car"></input>
          </div>
          <div className="admin-navbar-button">
            <button>Search</button>
          </div>
          <div className="admin-navbar-userInitialName">
            <h3>L</h3>
          </div>
          <div className="admin-navbar-userName">
            <h4>Luthfi Anesa</h4>
          </div>
        </div>
      </div>
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
