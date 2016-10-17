import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>My First Angular 2 App</h1>
  <h3>One of my favorite bands is: {{ favoriteBand }}</h3>
  <p>If I had to choose a favorite painter it would be: {{ favoritePainter }}</p>
  <p>The number of slices of pie I would like is: {{ slicesOfPie }}</p>
  </div>
  `
})

export class AppComponent {
  favoriteBand: string = 'Ani DiFranco';
  favoritePainter: string = 'Van Gogh';
  slicesOfPie: number = 3;
}
