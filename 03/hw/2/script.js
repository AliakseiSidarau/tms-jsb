function Task(taskText) {
    this.taskId = parseFloat(Math.random().toFixed(5) * 1000000);
    this.taskText = taskText;
    this.dataTask = Date.now();
    this.taskCheck = false;

    // зашел в тупик с определением длительности задачи
    // Object.defineProperty(this,'dataTask',{
    //    get: function () {
    //        return this.dataTask;
    //    }
    // });
    };
var task1 = new Task('Hello');



var arrtask =  Array.from(task1);
console.log(arrtask);



var div = document.createElement('div');
div.className = 'taskDiv';
div.innerHTML = 'Hello world!!!';


var  countPress = 0;
function changeColor() {
    countPress++;
    if (countPress == 1) {
        document.body.style.backgroundColor = '#c3c';
    }
    if (countPress == 2) {
        document.body.style.backgroundColor = '#ffffff';
    }
};
