import { load } from "./load.js";
import { showTasks } from "./domManipulator.js" 
//factory function to create tasks
var tasksArray = [];
const taskCreator = (name, description, dueDate, priority, completed = "No") => {
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
export { taskCreator, addToTasks, deleteFunction }