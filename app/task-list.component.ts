import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="priorityChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority">
    <task-display [task]="currentTask"></task-display>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  public selectedPriority: string = "high";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  priorityChange(optionPriorityFromMenu) {
    this.selectedPriority = optionPriorityFromMenu;
    console.log(this.selectedPriority);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

}
