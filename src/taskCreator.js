import { load } from "./load.js";
import { showTasks } from "./domManipulator.js" 
var tasksArray = [];
var projects = [];
//factory function to create tasks

const taskCreator = (name, description, dueDate, priority, completed = "no") => {
    if (name === ""){
        name = "Untitled";
    }

    return { name, description, dueDate, priority, completed };
};
const addToTasks = function(e) {
    e.preventDefault();
    let thisTask = taskCreator(taskName.value, description.value, dueDate.value, priority.value);
    tasksArray.push(thisTask);
    load();
    document.getElementById("tasksContainer").innerHTML = "";
    tasksArray.forEach((element, index) => {
        showTasks(element, index);
    });
}

const deleteFunction = function(e){
    tasksArray.splice(e.target.parentElement.id, 1);
    document.getElementById("tasksContainer").innerHTML = "";
    tasksArray.forEach((element, index) => {
        showTasks(element, index);
    });
}
const changeStatus = function(e){
    document.getElementById("tasksContainer").innerHTML = "";
    if (tasksArray[e.target.parentElement.id].completed === "no"){
        tasksArray[e.target.parentElement.id].completed = "yes";
    }
    else {
        tasksArray[e.target.parentElement.id].completed = "no";
    }
    tasksArray.forEach((element, index) => {
        showTasks(element, index);
    });
}

export { taskCreator, addToTasks, deleteFunction, changeStatus }