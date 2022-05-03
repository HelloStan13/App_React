const Task_rest_API = 'http://localhost:9090/api/task';

class APIService {    
    getTask(){
        return fetch(Task_rest_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

}

export default new APIService();