import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() txt='Click';
  @Input() color='white';
  @Output() btnClick = new EventEmitter();
  // @Input() color: string;
  constructor() {
   }
  ngOnInit(): void {
  }

  onClick() {
    // console.log('%c Added ','color:red;font-size:50px')
    this.btnClick.emit();
  }
}
