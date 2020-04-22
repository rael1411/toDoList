import { createForm } from "./domManipulator.js"
import { selector } from "./taskCreator.js"
/*import { addDom, addInput, addTextArea, addDueDate } from "./domManipulator.js"

const load = function(){
    addDom("form", "container", "", "", "creator");
    addDom("h4", "creator", "Create a new task", "", "taskTitle");
    addInput("creator", "Name of the task", "formElement", "name");
    addTextArea("creator", "Short description here...", "formElement", "description")
    addDom("p", "creator", "Due date", "formElement", "dateDesc")
    addDueDate("creator", "formElement", "dueDate");
    addDom("button", "creator", "SUBMIT", "", "submitButton");
}
*/ 
const load = function(){
    selector();
    createForm();
}

export { load }