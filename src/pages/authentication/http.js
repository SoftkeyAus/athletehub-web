import axios from "axios";
import {URL} from "./../../config/consts";

export async function SignIn(payload) {
  if(payload.loginUserType == 0) {
    return await axios.post(URL.ADMIN_LOGIN, payload);
  } else {
    return await axios.post(URL.AUTHENTICATION_LOGIN, payload);
  }  
}

export async function SignUp(payload) {
  return await axios.post(URL.AUTHENTICATION_SIGNUP, payload);
}

export async function getCountries() {
  return await axios.get(URL.COUNTRIES);
}

export async function forgotPassword(payload) {
  return await axios.post(URL.AUTH_FORGOT_PASSWORD, payload);
}