import proj from "./projects.js";
const Projects = new proj();

class Display {
    constructor() {}

    clear() {
        const sidebar = document.querySelector(".sidebar");
        const content = document.querySelector(".content");

        sidebar.innerHTML = "";
        content.innerHTML = "";
    }

    redraw() {
        this.clear();
        let active;

        //sidebar header
        const sidebar = document.querySelector(".sidebar");

        const logo = document.createElement("div");
        logo.classList.add("logo");
        sidebar.appendChild(logo);

        const logoImg = document.createElement("div");
        logoImg.classList.add("logoImg");
        logo.appendChild(logoImg);

        const logoText = document.createElement("h1");
        logoText.classList.add("logoText");
        logoText.textContent = "Planit";
        logo.appendChild(logoText);

        //sidebar projects
        Projects.project.forEach(project => {
            const button = document.createElement("button");
            button.classList.add("project");
            button.textContent = project.name;
            button.id = project.projectID;
            if (project.active === true) {
                button.disabled = true;
                active = project;
            }
            sidebar.appendChild(button);
        });

        //sidebar add project
        const addProject = document.createElement("div");
        addProject.classList.add("addProject");
        sidebar.appendChild(addProject);

        const inputProject = document.createElement("input");
        inputProject.type = "text";
        inputProject.classList.add("inputProject");
        inputProject.placeholder = "New Project";
        inputProject.size = "13";
        inputProject.disabled = true;
        addProject.appendChild(inputProject);

        const addProjectBtn = document.createElement("button");
        addProjectBtn.id = "addProjectBtn";
        addProject.appendChild(addProjectBtn);

        //content header
        const content = document.querySelector(".content");

        const header = document.createElement("div");
        header.classList.add("header");
        content.appendChild(header);

        const activeProject = document.createElement("input");
        activeProject.type = "text";
        activeProject.classList.add("activeProject");
        activeProject.value = active.name;
        activeProject.disabled = true;
        header.appendChild(activeProject);

        const editProjectBtn = document.createElement("button");
        editProjectBtn.id = "editProjectBtn";
        header.appendChild(editProjectBtn);

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.id = "deleteProjectBtn";
        header.appendChild(deleteProjectBtn);

        const dueDateHeader = document.createElement("h3");
        dueDateHeader.classList.add("dueDateHeader");
        dueDateHeader.textContent = "Due Date";
        header.appendChild(dueDateHeader);

        const sortBtn = document.createElement("button");
        sortBtn.id = "sortBtn";
        header.appendChild(sortBtn);

        //content notes

        //content add note
    }
    //init

    //add project

    //edit project

    //delete project

    //sort

    //note check

    //note expand

    //list check

    //delete list item

    //add list item

    //edit note

    //delete note

    //add note

}

export default Display;

    // ========== functionality testing ========== //

Projects.addProject("firstProject");
Projects.project[0].addNote("This is an example note", "description text", "Today", "high");
Projects.project[0].note[0].addListItem("This is an example list item");
Projects.project[0].note[0].expandNote();
Projects.project[0].note[0].addListItem("Example checked item");
Projects.project[0].note[0].list[1].checkListItem();
Projects.project[0].addNote("This is a closed note", "description text", "Tomorrow", "medium");
console.log(Projects.project);