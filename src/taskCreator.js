import { load } from "./load.js";
import { showTasks, projectSelector, createForm } from "./domManipulator.js";

//factory function to create tasks

const taskCreator = (
  name,
  description,
  dueDate,
  priority,
  completed = "no"
) => {
  if (name === "") {
    name = "Untitled";
  }

  return { name, description, dueDate, priority, completed };
};
const addToTasks = function (e) {
  e.preventDefault();
  let thisTask = taskCreator(
    taskName.value,
    description.value,
    dueDate.value,
    priority.value
  );
  let projectName = document.getElementById("projectName").textContent;
  let result = projects.find((obj) => {
    return obj.name === projectName;
  });
  result.tasks.push(thisTask);
  localStorage.setItem("projects", JSON.stringify(projects));
  createForm();
  projectSelector(projects, result);
  showTasks();
  document.getElementById("tasksContainer").innerHTML = "";
  result.tasks.forEach((element, index) => {
    showTasks(element, index);
  });
};

const deleteFunction = function (e) {
  let projectName = document.getElementById("projectName").textContent;
  let result = projects.find((obj) => {
    return obj.name === projectName;
  });
  result.tasks.splice(e.target.parentElement.id, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  document.getElementById("tasksContainer").innerHTML = "";
  result.tasks.forEach((element, index) => {
    showTasks(element, index);
  });
};
const changeStatus = function (e) {
  document.getElementById("tasksContainer").innerHTML = "";
  let projectName = document.getElementById("projectName").textContent;
  let result = projects.find((obj) => {
    return obj.name === projectName;
  });
  if (result.tasks[e.target.parentElement.id].completed === "no") {
    result.tasks[e.target.parentElement.id].completed = "yes";
  } else {
    result.tasks[e.target.parentElement.id].completed = "no";
  }
  localStorage.setItem("projects", JSON.stringify(projects));

  result.tasks.forEach((element, index) => {
    showTasks(element, index);
  });
};
const projectCreator = (name, tasks = []) => {
  return { name, tasks };
};
const createProject = function () {
  let name = prompt("What do you want to call your project?");
  projects.push(projectCreator(name));
  localStorage.setItem("projects", JSON.stringify(projects));
  projectSelector(projects, projects[projects.length - 1]);
  document.getElementById("tasksContainer").innerHTML = "";
  projects[projectSelector.length - 1].forEach((element, index) => {
    showTasks(element, index);
  });
};
if (!localStorage.getItem("projects")) {
  console.log("storage not found");
  // creates and initializes the projects folder with one project
  var tasksArray = [];
  var projects = [];
  projects.push(projectCreator("Default", tasksArray));
} else {
  console.log("storage found");
  var projects = JSON.parse(window.localStorage.getItem("projects"));
}
const selector = function () {
  projectSelector(projects, projects[0]);
};
const chooseProject = function (e) {
  let result = projects.find((obj) => {
    return obj.name === e.target.textContent;
  });
  createForm();
  projectSelector(projects, result);
  document.getElementById("tasksContainer").innerHTML = "";
  result.tasks.forEach((element, index) => {
    showTasks(element, index);
  });
};

export {
  taskCreator,
  addToTasks,
  deleteFunction,
  changeStatus,
  selector,
  createProject,
  chooseProject,
};
