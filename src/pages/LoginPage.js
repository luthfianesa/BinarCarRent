import CoverImage from "../components/CoverImage";
import Login from "../components/Login";
import "../pages/pages.css";

const LoginPage = () => {
  return (
    <div className="loginPage-container">
      <Login />
      <CoverImage />
    </div>
  );
};

export default LoginPage;
