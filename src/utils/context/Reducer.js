export const reducer = (state, action) => {
    switch (action.type) {

      case "LOGIN":
        
        window.localStorage.setItem('athletehub-token', action.payload.token);
        sessionStorage.setItem("athletehub-token", action.payload.token);
        sessionStorage.setItem("userId", action.payload.userId);
        sessionStorage.setItem("userType", action.payload.loginUserType);
        sessionStorage.setItem("isLoggedIn", true);

        return {
          ...state,
          isloggedIn: true,
          userId: action.payload.userId,
          token: action.payload.token,
          userType: action.payload.loginUserType
        };

      case "LOGOUT":
        sessionStorage.clear();
        return {
          ...state,
          isloggedIn: false,
          userId: null,
          token: "",
          userType: null
        };
      default:
        return state;
    }
  };