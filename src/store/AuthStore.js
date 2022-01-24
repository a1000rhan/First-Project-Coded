import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signIn = async (user) => {
    try {
      const resp = await api.post("/signin", user);
      this.setUser(resp.data.token);
    } catch (error) {}
    //
  };
  signUp = async (user) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
    } catch (error) {}
  };
}

const authstore = new AuthStore();
export default authstore;
