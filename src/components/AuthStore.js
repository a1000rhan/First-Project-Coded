import { observable, makeAutoObservable, action } from "mobx";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  signIn = async (user) => {
    try {
      const resp = await instance.post("/signin", user);
      this.setUser(resp.data);
    } catch (error) {}
  };
}
signUp = async (user) => {
  try {
    const resp = await instance.post("/signup", user);
    this.setUser(resp.data);
  } catch (error) {}
};
