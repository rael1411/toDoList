import {
  addToTasks,
  deleteFunction,
  changeStatus,
  createProject,
  chooseProject,
} from "./taskCreator.js";
const projectSelector = function (projects, currentProject) {
  let container = document.getElementById("projectContainer");
  container.innerHTML = "";
  let presentation = document.createElement("span");
  presentation.textContent = "Current project: ";
  let thisName = document.createElement("span");
  thisName.textContent = currentProject.name;
  thisName.id = "projectName";
  thisName.style.color = "green";
  container.appendChild(presentation);
  container.appendChild(thisName);
  let newProject = document.createElement("button");
  newProject.textContent = "NEW";
  newProject.addEventListener("click", createProject);
  container.appendChild(newProject);
  let dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  let projectDropdown = document.createElement("button");
  projectDropdown.classList.add("dropbtn");
  let dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdownContent");
  container.appendChild(dropdown);
  dropdown.appendChild(projectDropdown);
  projectDropdown.textContent = "Choose";
  dropdown.appendChild(dropdownContent);
  for (let project in projects) {
    let element = document.createElement("p");
    element.textContent = projects[project].name;
    element.addEventListener("click", chooseProject);
    dropdownContent.append(element);
  }
};
const createForm = function () {
  let container = document.getElementById("container");
  container.innerHTML = "";
  let br = document.createElement("br");
  container.appendChild(br);
  let form = document.createElement("form");
  form.id = "creator";
  let title = document.createElement("h4");
  title.classList.add("formElement");
  title.textContent = "Create a new task";
  container.appendChild(form);
  form.appendChild(title);
  let taskName = document.createElement("input");
  taskName.setAttribute("placeholder", "Name of the task");
  taskName.id = "taskName";
  taskName.classList.add("formElement");
  form.appendChild(taskName);
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "Short description here...");
  description.id = "description";
  description.classList.add("formElement");
  form.appendChild(description);
  let dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.id = "dueDate";
  dueDate.classList.add("formElement");
  form.appendChild(dueDate);
  let priority = document.createElement("select");
  priority.id = "priority";
  priority.classList.add("formElement");
  let priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";
  let mediumPriority = document.createElement("option");
  mediumPriority.textContent = "Medium";
  mediumPriority.setAttribute("value", "medium");
  let highPriority = document.createElement("option");
  highPriority.textContent = "High";
  highPriority.setAttribute("value", "high");
  let lowPriority = document.createElement("option");
  lowPriority.textContent = "Low";
  lowPriority.setAttribute("value", "low");
  form.appendChild(priorityLabel);
  form.appendChild(priority);
  priority.appendChild(highPriority);
  priority.appendChild(mediumPriority);
  priority.appendChild(lowPriority);
  let submitButton = document.createElement("button");
  submitButton.textContent = "Add";
  submitButton.id = "submitButton";
  submitButton.classList.add("formElement");
  form.appendChild(submitButton);
  submitButton.addEventListener("click", addToTasks);
};

const showTasks = function (task, index) {
  const container = document.getElementById("tasksContainer");
  const singleTask = document.createElement("div");
  singleTask.id = index;
  singleTask.classList.add("task");
  container.appendChild(singleTask);
  for (let attribute in task) {
    let element = document.createElement("p");
    if (attribute === "dueDate" && task[attribute] !== "") {
      element.textContent = "Due " + task[attribute];
    } else {
      element.textContent = task[attribute];
    }
    //setting a color based on priority
    if (attribute === "priority") {
      element.textContent = "";
      switch (task[attribute]) {
        case "high":
          singleTask.style.backgroundColor = "FireBrick";
          break;
        case "medium":
          singleTask.style.backgroundColor = "orange";
          break;
        case "low":
          singleTask.style.backgroundColor = "lightgreen";
          break;
      }
    }
    if (attribute === "completed") {
      element.textContent = "";
      if (task[attribute] !== "no") {
        element.innerHTML = "&#10004;";
      }
      element.addEventListener("click", changeStatus);
    }
    element.classList.add(attribute);
    singleTask.appendChild(element);
  }
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", deleteFunction);
  deleteButton.textContent = "X";
  singleTask.appendChild(deleteButton);
};
export { createForm, showTasks, projectSelector };
