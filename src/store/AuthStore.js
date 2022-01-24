import { observable, makeAutoObservable, action } from "mobx";
import api from "./api";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  signIn = async (user) => {
    try {
      const resp = await api.post("/signin", user);
      this.setUser(resp.data);
    } catch (error) {}
  };
s
signUp = async (user) => {
  try {
    const resp = await api.post("/signup", user);
    this.setUser(resp.data);
  } catch (error) {}
};
}
const authstore = new AuthStore();
export default authstore;
