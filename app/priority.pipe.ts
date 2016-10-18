import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], desiredPriority) {
    var output: Task[] = [];
    if(desiredPriority === "low"){
      for (var i = 0; i < input.length; i++) {
        if(input[i].priority === "low") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "medium") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].priority === "medium") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "high") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
