import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Select Priority Level:</label>
      <select #newPriority>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
    </div>
    <div>
      <label>Select Category Level:</label>
      <select #newCategory>
        <option value="home">home</option>
        <option value="hobby">hobby</option>
        <option value="work">work</option>
      </select>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newId.value, newPriority.value, newCategory.value);
        newDescription.value='';
        newId.value='';
        newPriority.value='';
        newCategory.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string, category: string) {
    var newTaskToAdd: Task = new Task(description, id, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
