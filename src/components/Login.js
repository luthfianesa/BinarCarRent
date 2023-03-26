import "../components/login.css";
import RectangleIcon from "../assets/icon_rectangle.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { useState } from "react";
import { handleLogin } from "../redux/actions/authAction";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((rootReducer) => rootReducer)
  console.log(state);

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onHandleLogin = () => {
    const payload = {
      email: email,
      password: password,
    }
    dispatch(handleLogin(payload))
    navigate("/")
    
  }

  const goHomepage = () => {
    return navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-content-container">
        <div className="login-rectangle">
          <img src={RectangleIcon} alt="icon-rectangle" onClick={goHomepage}></img>
        </div>
        <div className="login-heading">
          <h1>Welcome Back</h1>
        </div>
        <div className="input-container">
          <div className="login-input-label">
            <h6>Email</h6>
          </div>
          <div className="login-input">
            <input type="email" placeholder="Contoh: johndee@gmail.com" onChange={handleEmail}></input>
          </div>
        </div>
        <div className="input-container">
          <div className="login-input-label">
            <h6>Password</h6>
          </div>
          <div className="login-input">
            <input type="password" placeholder="6+ Karakter" onChange={handlePassword}></input>
          </div>
        </div>
        <div className="login-btn-container">
          <button onClick={onHandleLogin}>Sign In</button>
        </div>
        <div className="direct-to-register">
          <h6>
            Don't have an account?
            <Link to="/register" target="_blank">
              Sign Up for free
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
