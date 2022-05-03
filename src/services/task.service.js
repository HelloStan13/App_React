import http from '../APIService';

class TaskDataService {
    getAll() {
      return http.get("api/task");
    }
  
    get(id) {
      return http.get(`api/{id}/task`);
    }
  
    create(data) {
      return http.post("api/task", data);
    }
  
    update(id, data) {
      return http.put(`api/task/{id}`, data);
    }
  
    delete(id) {
      return http.delete(`api/{id}/task`);
    }


}

export default new TaskDataService();