console.log("Hi, Mom!");

import "../css/style.css";
import disp from "./display.js";

const Display = new disp();

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
        if (storageAvailable("localStorage")) {
        Display.init(true);
        } else {
        Display.init(false);
        }
    });

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