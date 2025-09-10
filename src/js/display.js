import proj from "./projects.js";
const Projects = new proj();

class Display {
    constructor() {}

    log() {
        console.log("display");
        Projects.addProject("secondProject");
        console.log(Projects);
    }

    //clear

    //redraw

    //init

    //expand newProject input

    //collapse newProject input

    //expand note

    //collapse note

    //editNote on

    //editNote off

}

export default Display;

    // ========== functionality testing ========== //

Projects.addProject("firstProject");
Projects.project[0].addNote("store", "for groceries", "today", "high");
Projects.project[0].note[0].addListItem("bread");
Projects.project[0].note[0].addListItem("milk");
Projects.project[0].note[0].checkListItem(1);
Projects.setActive(0);
console.log(Projects.project);