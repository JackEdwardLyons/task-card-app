export class Task {
    // each task contains a string containing the task content
    // and a completed boolean 
    constructor (
        public content: string, 
        public completed: boolean
    ) { }
}