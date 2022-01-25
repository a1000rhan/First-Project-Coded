import { makeAutoObservable } from "mobx";
import api from "./api";

class DataStore {
  jam3yas = [];

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchTasks = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yas = response.data;
      console.log(
        "🚀 ~ file: dataStore.js ~ line 14 ~ DataStore ~ fetchTasks= ~ this.tasks",
        this.jam3yas
      );
    } catch (error) {
      console.log(error);
    }
  };

  createTask = async (newTask) => {
    try {
      const response = await api.post("/jam3ya", newTask);
      this.jam3yas.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (id) => {
    console.log(id);
    try {
      await api.delete(`/jam3ya/${id}`);
      const tempTask = this.jam3yas.filter((task) => task._id !== id);
      this.jam3yas = tempTask;
    } catch (e) {
      alert("cannot delete the ");
    }
  };
  updateTask = async (updatedTask) => {
    try {
      const response = await api.put(`/jam3ya/${updatedTask._id}`, updatedTask);
      const temptask = this.jam3yas.map((task) =>
        task._id === updatedTask._id ? response.data : task
      );

      this.jam3yas = temptask;
    } catch (error) {
      alert("cannot update");
    }
  };
  joinJam3ya = async (jam3ya) => {
    console.log(jam3ya);

    try {
      const response = await api.post(`jam3ya/join/${jam3ya._id}`);
      jam3ya.users.push(response.data);
      console.log(response.data);
    } catch (error) {
      alert("sorrt u cannot join");
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;
