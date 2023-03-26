import CoverImageAdmin from "../../components/admin/CoverImageAdmin";
import LoginAdmin from "../../components/admin/LoginAdmin";
import "../pages.css";

const LoginAdminPage = () => {
  return (
    <div className="loginAdminPage-container">
      <CoverImageAdmin />
      <LoginAdmin />
    </div>
  );
};

export default LoginAdminPage;
