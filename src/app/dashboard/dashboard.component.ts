import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  inputText: string;
  textArea: string;

  receiveInput($event): void {
    this.inputText = $event;
  }

  receiveText($event): void {
    this.textArea = $event;
  }
}
