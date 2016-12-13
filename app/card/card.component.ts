import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
    // module id allows relative path urls (ie) see templateUrl
    moduleId: module.id,
    selector: 'app-card',
    // anything more than 2 or 3 lines of HTML, 
    // put it in an external template file.
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

// add CardComponent to the ROOT module.
export class CardComponent { 
    // data can be passed into the task property
    // this variable "task" of object Task can be bound to any html element
    @Input() task: Task;

    statusToggle() {
        this.task.completed = !this.task.completed;
    }
}