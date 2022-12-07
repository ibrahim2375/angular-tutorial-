import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task'
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() addNewItem: EventEmitter<Task> = new EventEmitter();
  text: string ='';
  checked: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.text){
      alert('Please enter a task')
      return;
    }
    const newTask = {
      text: this.text,
      checked: this.checked
    }

    // add the task
    this.addNewItem.emit(newTask);
   //reset a form element
    this.text = '';
    this.checked = false;
  }
}
