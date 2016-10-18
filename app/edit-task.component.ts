import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="childSelectedTask.id">
      </div>
      <div>
        <label>Category</label>
        <select [(ngModel)]="childSelectedTask.category">
          <option value="work">work</option>
          <option value="hobby">hobby</option>
          <option value="home">home</option>
        </select>
      </div>
      <div>
        <label>Priority</label>
        <select [(ngModel)]="childSelectedTask.priority">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
