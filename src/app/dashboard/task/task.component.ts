import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  inputValue: string;
  textValue: string;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() textAreaEvent = new EventEmitter<string>();

  onBlur() {
    this.messageEvent.emit(this.inputValue);
    this.textAreaEvent.emit(this.textValue);
  }
}
