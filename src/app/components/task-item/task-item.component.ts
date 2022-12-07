import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {id: 0,text: '',checked:false};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }
   faTimes = faTimes;
  ngOnInit(): void {
  }

  onDelete(task:Object) {
   this.onDeleteTask.emit(task);
  }
  onToggleCheck(task:Object) {
   this.onToggleTask.emit(task);
  }

}
