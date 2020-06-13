import { load } from "./load.js";
import { taskCreator } from "./taskCreator.js";
import { formatDistance, subDays } from "date-fns";

//addDom is a function that takes the arguments in this order:
//type, parent, content, id, class. Pass "" as content, id or class to leave them empty
import css from "./styles.css";
load();
