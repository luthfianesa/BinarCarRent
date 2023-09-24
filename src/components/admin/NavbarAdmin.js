import "./navbarAdmin.css";
import iconSearch from "../../assets/icon-search.svg";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const goAdminDashboard = () => {
    return navigate("/admin-dashboard");
  };

  return (
    <div className="adminNavbar-container">
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
    </div>
  );
};

export default NavbarAdmin;
