import axios from "axios";
import { User } from "../types/User.type";

export const signIn = (_login: string, _password: string) => {
  return axios.get<User>("https://localhost:7234/authorization/LogIN", {
    params: {
      login: _login,
      password: _password,
    },
  });
};

export const signUp = (
  _login: string,
  _password: string,
  _name: string,
  _phone: string
) => {
  return axios.post("https://localhost:7234/authorization/SignUP", {
    mailLogin: _login,
    password: _password,
    name: _name,
    phone: _phone,
    moderator: 0,
  });
};

export const logOut = () => {
  localStorage.removeItem("user_mailLogin");
  localStorage.removeItem("user_password");
  localStorage.removeItem("user_phone");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_moderator");
};