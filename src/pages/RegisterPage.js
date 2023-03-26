import CoverImage from "../components/CoverImage";
import Register from "../components/Register";
import "../pages/pages.css"

const RegisterPage = () => {
  return (
    <div className="registerPage-container">
      <Register />
      <CoverImage />
    </div>
  );
};

export default RegisterPage;