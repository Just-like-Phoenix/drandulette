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

export const bannUser = (_login: string) => {
  return axios.put(
    "https://localhost:7234/authorization/LogIN?mailLogin=" +
      _login +
      "&verification=0&banned=1"
  );
};

export const verificateUser = (_login: string) => {
  return axios.put(
    "https://localhost:7234/authorization/LogIN?mailLogin=" +
      _login +
      "&verification=1&banned=0"
  );
};

export const signUp = (
  _login: string,
  _password: string,
  _name: string,
  _phone: string,
  _profilePic: string
) => {
  return axios.post("https://localhost:7234/authorization/SignUP", {
    mailLogin: _login,
    password: _password,
    name: _name,
    phone: _phone,
    moderator: 0,
    profilePic: _profilePic,
  });
};

export const logOut = () => {
  localStorage.removeItem("user_mailLogin");
  localStorage.removeItem("user_profilePic");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_moderator");
  localStorage.removeItem("user_verificated");
  localStorage.removeItem("user_banned");
};
