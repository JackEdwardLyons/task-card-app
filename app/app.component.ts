import { Component } from '@angular/core';

import { Task } from './model/task';

// This is the main component rendered in the index.html file
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
    // always add PRIVATE to your properties, then nothing outside of this component can modify this data
    // if you set a variable without inferring a data type, always be sure to set a data type
    // (ie) private str = "stringy"; => this is OK because str is set as a string
    // (ie) private str; => this is NOT OK because the data type isn't inferred
    private tasks: Task[] = [];
    // this object needs to be passed into the CardComponent
        // new Task(
        //     "Buy a new car",
        //     false
        // )
    // the currentTask instance of new Task needs to at least have something inputted as an argument (ie) null
    private currentTask = new Task(null, false);
    
    addTask() {
        // create a variable to initiate a new instance of Task
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    }

    /* TypeScript method syntax
       str? (question mark means the parameter is optional)
    
    addTask(num: number,str?: string) {

    } 
     -> the returned result must always be of type String
    addTask():string {
      return "poo";   
    }*/
 }