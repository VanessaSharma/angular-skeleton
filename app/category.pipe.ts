import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], desiredCategory) {
    var output: Task[] = [];
    if(desiredCategory === "work"){
      for (var i = 0; i < input.length; i++) {
        if(input[i].category === "work") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "hobby") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].category === "hobby") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "home") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].category === "home") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
