import axios from "axios";
import { observable, makeAutoObservable, action } from "mobx";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  signIn = async (user) => {
    //   try {
    //     const resp = await axios.post("/signin", user);
    //     this.setUser(resp.data);
    //   } catch (error) {}
    // };
  };
  signUp = async (user) => {
    // try {
    //   const resp = await axios.post("/signup", user);
    //   this.setUser(resp.data);
    // } catch (error) {}
  };
}
const authstore = new AuthStore();
export default authstore;
