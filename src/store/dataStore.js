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

    createTask = async (newTask) => {
        try{
            const response =  await axios.post(
                "https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya" , newTask
                );
            this.tasks=[...this.tasks,newTask]
        }
        catch(error) {
            console.log(error);
        }
    };

    deleteTask = async (id) => {
        try{
        const response = await axios.delete (`https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya/${id}`);
        let tempTasks = this.tasks.filter((task) => task.id !== id);
        this.tasks = tempTasks;
    }
    catch(error){
        console.log(error);
    }
    };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;