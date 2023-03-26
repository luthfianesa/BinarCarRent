const initialState = {
  isLogin: false,
  isRegister: false,
  isToken: "",
  message: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Register":
      return {
        ...initialState,
        isRegister : action.payload
      };
    case "Login":
      return {
        ...initialState,
        isLogin: action.payload
       
      };
    case "Logout":
      return {
        ...initialState,
        isLogin : action.payload
      }

    default:
      return state;
  }
  
};
