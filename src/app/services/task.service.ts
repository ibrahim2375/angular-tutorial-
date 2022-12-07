import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs'
//tasks
import {Task} from '../Task';
import {Tasks} from '../task-mock';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private api = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }
  getTasks() : Observable<Task[]>  {
    // const tasks = of(Tasks);
    // return tasks;
   return this.http.get<Task[]>(this.api);
  }
   deleteTask(task: Task) : Observable<Task[]>  {
    const url = `${this.api}/${task.id}`;
    return this.http.delete<Task[]>(url);
  }
    updateTask(task: Task) : Observable<Task[]>  {
    const url = `${this.api}/${task.id}`;
    return this.http.put<Task[]>(url,task,httpOptions);
  }
  addTask(task: Task) : Observable<Task[]> {
    return this.http.post<Task[]>(this.api,task,httpOptions);
  }
}
