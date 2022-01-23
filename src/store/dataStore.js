import { makeAutoObservable } from "mobx";
import axios from "axios";


class DataStore {
    tasks = [];

    constructor(){
        makeAutoObservable(this,{});
    }
    fetchTasks = async () =>{
        try{
            const response = await axios.get("https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya");
            this.tasks = response.data
            console.log(this.tasks);
        }
        catch (error){
            console.log(error);
        }
    };

}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;