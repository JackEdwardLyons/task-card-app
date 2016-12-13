"use strict";
var Task = (function () {
    // each task contains a string containing the task content
    // and a completed boolean 
    function Task(content, completed) {
        this.content = content;
        this.completed = completed;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map