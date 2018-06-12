//#1

function Task(taskText) {
    this.taskId = parseFloat(Math.random().toFixed(5) * 1000000);
    this.taskText = taskText;
    this.dataTask = new Date().getUTCMilliseconds();
    this.taskCheck = false;
    // Object.defineProperty(this,'dataTask',{
    //    get: function () {
    //        return this.dataTask;
    //    }
    // });
};

var task1 = new Task('Hello');
console.log(task1);

//#2

// Task.slice();
// console.log(Task);
