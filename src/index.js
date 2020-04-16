import { load } from "./load.js"
import { taskCreator } from "./taskCreator.js"
import css from "./styles.css";
var newTask = taskCreator("ciao", "bla", 5);
var newTask2 = taskCreator("meh", "adsf", 2, "high");
console.log(newTask);
console.log(newTask2);

console.log("i'm dumb")