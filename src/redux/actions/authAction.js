import axios from "axios";

export const handleRegister = (payload) => (dispatch) => {
  axios
    .post(`https://bootcamp-rent-cars.herokuapp.com/customer/auth/register`, payload)
    .then((res) => {
      dispatch({
        type: "Register",
        payload: true,
        // Kalo payload lebih dari satu pake objek
      });
      // console.log(res);
    })
    .catch((err) => console.log(err.message));
};

export const handleLogin = (payload) => (dispatch) => {
  axios
    .post(`https://bootcamp-rent-cars.herokuapp.com/customer/auth/login`, payload)
    .then((res) => {
      dispatch({
        type: "Login",
        payload: true,
      });
      // console.log(res);
      localStorage.setItem("loginToken", res.data.access_token)
    })
    .catch((err) => console.log(err.message));
};

export const handleLogout = () => (dispatch) => {
  dispatch({
    type: "Logout",
    payload: false,
  });
  localStorage.removeItem("loginToken");
};
