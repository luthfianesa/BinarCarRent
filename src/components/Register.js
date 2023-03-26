import "../components/register.css";
import RectangleIcon from "../assets/icon_rectangle.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../redux/actions/authAction";
import rootReducer from "../redux/reducers";
import { useState } from "react";

// Use selector untuk ambil data reducer

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((rootReducer) => rootReducer);
  // console.log(state.authReducer.isRegister);

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value) 
  }

  // const handleRedirect = () => {

  // }

  // Payload disesuaikan sama request body API
  const onHandleRegister = () => {
    const payload = {
      email: email,
      password: password,
      role: "Admin",
    };
    dispatch(handleRegister(payload));
  };

  const goHomepage = () => {
    return navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-content-container">
        <div className="register-rectangle">
          <img src={RectangleIcon} alt="icon-rectangle" onClick={goHomepage}></img>
        </div>
        <div className="register-heading">
          <h1>Sign Up</h1>
        </div>
        <div className="input-container">
          <div className="register-input-label">
            <h6>Name*</h6>
          </div>
          <div className="register-input">
            <input type="text" placeholder="Nama Lengkap"></input>
          </div>
        </div>
        <div className="input-container">
          <div className="register-input-label">
            <h6>Email</h6>
          </div>
          <div className="register-input">
            <input type="email" placeholder="Contoh: johndee@gmail.com" onChange={handleEmail}></input>
          </div>
        </div>
        <div className="input-container">
          <div className="register-input-label">
            <h6>Create Password</h6>
          </div>
          <div className="register-input">
            <input type="password" placeholder="6+ Karakter" onChange={handlePassword}></input>
          </div>
        </div>
        <div className="register-btn-container">
          <button onClick={onHandleRegister}>Sign Up</button>
        </div>
        <div className="direct-to-login">
          <h6>
            Already have an account? <Link to="/login">Sign In here</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
