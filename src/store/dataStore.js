import { makeAutoObservable } from "mobx";
import api from "./api";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class DataStore {
  jam3yas = [];
  isLoading = true;
  MySwal = withReactContent(Swal);
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchTasks = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yas = response.data;
      this.isLoading = false;
    } catch (error) {
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p>Fatching is Faild</p>);
      });
    }
  };

  createTask = async (newTask) => {
    try {
      const response = await api.post("/jam3ya", newTask);
      this.jam3yas.push(response.data);
    } catch (error) {
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p>Creating Jam3ys is Faild</p>);
      });
    }
  };

  deleteTask = async (id) => {
    console.log(id);
    try {
      await api.delete(`/jam3ya/${id}`);
      const tempTask = this.jam3yas.filter((task) => task._id !== id);
      this.jam3yas = tempTask;
    } catch (e) {
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p>Deleting Jam3ya is Faild</p>);
      });
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
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p>Updating Jam3ya is faild</p>);
      });
    }
  };
  joinJam3ya = async (jam3ya) => {
    console.log(jam3ya);

    try {
      const response = await api.post(`jam3ya/join/${jam3ya._id}`);

      const tempJam3ya = this.jam3yas.map((jam3) =>
        jam3._id === jam3ya._id ? response.data : jam3
      );
      this.jam3yas = tempJam3ya;
    } catch (error) {
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p>Sorry you Cannot Jion</p>);
      });
    }
  };
  leaveJam3ya = async (jam3ya) => {
    try {
      const response = await api.post(`jam3ya/leave/${jam3ya._id}`);
      const tempJam3ya = this.jam3yas.map((jam3) =>
        jam3._id === jam3ya._id ? response.data : jam3
      );
      this.jam3yas = tempJam3ya;
    } catch (error) {
      this.MySwal.fire({
        didOpen: () => {
          this.MySwal.clickConfirm();
        },
      }).then(() => {
        return this.MySwal.fire(<p></p>);
      });
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;
