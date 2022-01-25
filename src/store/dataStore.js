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
    console.log(id);
    try {
      await api.delete(`/jam3ya/${id}`);
      const tempTask = this.tasks.filter((task) => task._id !== id);
      this.tasks = tempTask;
    } catch (e) {
      alert("cannot delete the room");
    }
  };
  updateTask = async (updatedTask) => {
    try {
      const response = await api.put(`/jam3ya/${updatedTask._id}`, updatedTask);
      const temptask = this.tasks.map((task) =>
        task._id === updatedTask._id ? response.data : task
      );

      this.tasks = temptask;
    } catch (error) {
      alert("cannot update");
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;
