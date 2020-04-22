import { load } from "./load.js";
import { showTasks, projectSelector, createForm } from "./domManipulator.js" 
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
    let projectName = document.getElementById("projectName").textContent;
    let result = projects.find(obj => {
        return obj.name === projectName;
    });
    result.tasks.push(thisTask);
    createForm();
    projectSelector(projects, result);
    showTasks();
    document.getElementById("tasksContainer").innerHTML = "";
    result.tasks.forEach((element, index) => {
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
const projectCreator = (name, tasks = []) => {
    return {name, tasks}
}
const createProject = function(){
    let name = prompt("What do you want to call your project?")
    projects.push(projectCreator(name));
    projectSelector(projects, projects[projects.length-1]);
    document.getElementById("tasksContainer").innerHTML = "";
    projects[projectSelector.length-1].forEach((element, index) => {
        showTasks(element, index);
    })
    
}

projects.push(projectCreator("Default", tasksArray));
const selector = function(){
    projectSelector(projects, projects[0]);
}
const chooseProject = function(e){
    let result = projects.find(obj => {
        return obj.name === e.target.textContent;
    });
    createForm();
    projectSelector(projects, result);
    document.getElementById("tasksContainer").innerHTML = "";
    result.tasks.forEach((element, index) => {
        showTasks(element, index);
    });;
}
export { taskCreator, addToTasks, deleteFunction, changeStatus, selector, createProject, chooseProject }