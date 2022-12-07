import { Component, OnInit } from '@angular/core';
//setvice
import {TaskService} from '../../services/task.service'
//tasks
import {Task} from '../../Task';
// import {Tasks} from '../../task-mock';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks: Task[] = [];
  constructor(private tasksService:TaskService) { }

  ngOnInit(): void {
   this.tasksService.getTasks().subscribe(tasks =>this.tasks = tasks);
  }
  deleteTask(task:Task){
      this.tasksService.deleteTask(task).subscribe(() => this.tasks =this.tasks.filter((t) => t.id !== task.id));
  }
  onToggle(task:Task){
      task.checked = !task.checked;
      this.tasksService.updateTask(task).subscribe();
  }
  addTask(task:Task){
    this.tasksService.addTask(task).subscribe(() => this.tasks.push(task));
  }

}
