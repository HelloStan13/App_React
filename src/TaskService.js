import axios from "axios";


const TASK_REST_API_URL = 'http://localhost:9090/api/task';

class TaskService {

    getTask(){
        return axios.get(TASK_REST_API_URL);
    }
    createTaks(){
        return axios.get(TASK_REST_API_URL);

    }
}

export default new  TaskService()