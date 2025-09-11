console.log("Hi, Mom!");

import "../css/style.css";
import disp from "./display.js";

const Display = new disp();

document.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("project")) {
        Display.setActive(target.id);
    }
    switch(target.id) {
        case "addProjectBtn":
            Display.addProject();
            break;
        case "editProjectBtn":
            Display.editProject();
            break;
        case "deleteProjectBtn":
            Display.deleteProject();
            break;
        case "sortBtn":
            console.log("clicked sort button");
            break;
        case "noteCheckedBtn":
            Display.noteCheck(target.parentElement.parentElement.id);
            break;
        case "expandBtn":
            Display.expand(target.parentElement.parentElement.id);
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
            Display.editNote(target.parentElement.parentElement.parentElement.id);
            break;
        case "deleteNoteBtn":
            Display.deleteNote(target.parentElement.parentElement.parentElement.id);
            break;
        case "addNoteBtn":
            console.log("clicked addNote button");
            break;
    }
});



Display.init();
