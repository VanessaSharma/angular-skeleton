import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <h3>Here are my favorite pies!</h3>
  <div *ngFor="let currentPie of favoritePies">
    <p>{{currentPie}}</p>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apples", "Banana Cream", "Blackberry"];
}
