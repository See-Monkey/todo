console.log("Hi, Mom!");

import "../css/style.css";
import proj from "./projects.js";
import disp from "./display.js";

const Projects = new proj();
const Display = new disp();

document.addEventListener("click", (e) => {
    let target = e.target;
    let targetID = "";
    if (target.classList.contains("project")) {
        console.log("clicked a project button")
    }
    switch(target.id) {
        case "addProjectBtn":
            console.log("clicked addProject button");
            break;
        case "editProjectBtn":
            console.log("clicked editProject button");
            break;
        case "sortBtn":
            console.log("clicked sort button");
            break;
        case "noteCheckedBtn":
            console.log("clicked noteChecked button");
            break;
        case "expandBtn":
            console.log("clicked expand button");
            break;
        case "listItemCheckedBtn":
            console.log("clicked listItemChecked button");
            break;
        case "deleteListItemBtn":
            console.log("clicked deleteListItem button");
            break;
        case "addListItemBtn":
            console.log("clicked addListItem button");
            break;
        case "editNoteBtn":
            console.log("clicked editNote button");
            break;
        case "deleteNoteBtn":
            console.log("clicked deleteNote button");
            break;
        case "addNoteBtn":
            console.log("clicked addNote button");
            break;
    }
});


// ========== functionality testing ========== //

Projects.addProject("firstProject");
Projects.project[0].addNote("store", "for groceries", "today", "high");
Projects.project[0].note[0].addListItem("bread");
Projects.project[0].note[0].addListItem("milk");
Projects.project[0].note[0].checkListItem(1);
Projects.setActive(0);
console.log(Projects.project[0]);
Display.log();
