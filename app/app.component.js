"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./model/task');
// This is the main component rendered in the index.html file
var AppComponent = (function () {
    function AppComponent() {
        // always add PRIVATE to your properties, then nothing outside of this component can modify this data
        // if you set a variable without inferring a data type, always be sure to set a data type
        // (ie) private str = "stringy"; => this is OK because str is set as a string
        // (ie) private str; => this is NOT OK because the data type isn't inferred
        this.tasks = [];
        // this object needs to be passed into the CardComponent
        // new Task(
        //     "Buy a new car",
        //     false
        // )
        // the currentTask instance of new Task needs to at least have something inputted as an argument (ie) null
        this.currentTask = new task_1.Task(null, false);
    }
    AppComponent.prototype.addTask = function () {
        // create a variable to initiate a new instance of Task
        var task = new task_1.Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map