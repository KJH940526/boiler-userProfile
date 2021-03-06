import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from "../_actions/types";

export default function (state = {}, action) {
  // console.log(state)
  console.log("types.js에서 넣음 =", action.type);
  switch (action.type) {
    case LOGIN_USER:
      console.log("case가 LOGIN_USER임 =", LOGIN_USER);
      console.log("server에서 옴 =", action.payload);
      return { ...state, loginSuccess: action.payload };
      break;

    case LOGOUT_USER:
      console.log("case가 LOGOUT_USER =", LOGOUT_USER);
      console.log("server에서 옴 =", action.payload);
      return { ...state, userData: action.payload };
      break;

    case REGISTER_USER:
      console.log("case가 REGISTER_USER =", REGISTER_USER);
      console.log("server에서 옴 =", action.payload);
      return { ...state, register: action.payload };
      break;

    case AUTH_USER:
      console.log("case가 AUTH_USER =", AUTH_USER);
      console.log("server에서 옴 =", action.payload);
      return { ...state, userData: action.payload };
      break;

    default:
      return state;
  }
}
