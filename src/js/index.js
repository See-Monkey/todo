console.log("Hi, Mom!");

import "../css/style.css";
import proj from "./projects.js";
import disp from "./display.js";

const Projects = new proj();
const Display = new disp();


// ========== functionality testing ========== //

Projects.addProject("firstProject");
Projects.project[0].addNote("store", "for groceries", "today", "high");
Projects.project[0].note[0].addListItem("bread");
Projects.project[0].note[0].addListItem("milk");
Projects.project[0].note[0].checkListItem(1);
Projects.setActive(0);
console.log(Projects.project[0]);
Display.log();
