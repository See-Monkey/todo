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
            Display.sortNotes();
            break;
        case "noteCheckedBtn":
            Display.noteCheck(target.parentElement.parentElement.id);
            break;
        case "expandBtn":
            Display.expand(target.parentElement.parentElement.id);
            break;
        case "listItemCheckedBtn":
            Display.listCheck(target.parentElement.id, target.parentElement.parentElement.parentElement.parentElement.id);
            break;
        case "deleteListItemBtn":
            Display.deleteListItem(target.parentElement.id, target.parentElement.parentElement.parentElement.parentElement.id);
            break;
        case "addListItemBtn":
            Display.addListItem(target.parentElement.parentElement.parentElement.parentElement.id);
            break;
        case "editNoteBtn":
            Display.editNote(target.parentElement.parentElement.parentElement.id);
            break;
        case "deleteNoteBtn":
            Display.deleteNote(target.parentElement.parentElement.parentElement.id);
            break;
        case "addNoteBtn":
            Display.addNote();
            break;
        case "submitNoteBtn":
            Display.submitNote();
    }
});



Display.init();
