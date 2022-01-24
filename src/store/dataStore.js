import { makeAutoObservable } from "mobx";
import api from "./api";

class DataStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchTasks = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.tasks = response.data;
      console.log(this.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  createTask = async (newTask) => {
    try {
      const response = await api.post("/jam3ya", newTask);
      this.tasks.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (id) => {
    try {
      const response = await api.delete(`/jam3ya/${id}`);
      let tempTasks = this.tasks.filter((task) => task.id !== id);
      this.tasks = tempTasks;
    } catch (error) {
      console.log(error);
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;
