import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const baseUrl = "http://localhost:3001/tasks";

var httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  getTasks(){
      return this._http.get(baseUrl);

  }
  createTask(task){
    return this._http.post(baseUrl,JSON.stringify(task),httpOption);

  }
  updateTask(id ,task){
    return this._http.put(baseUrl+"/"+id,JSON.stringify(task),httpOption);

  }
  deleteTask(id){
    return this._http.delete(baseUrl+"/"+id);

  }
}
