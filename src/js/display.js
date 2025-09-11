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
        if (active.edit === false) {
            activeProject.disabled = true;
        }
        header.appendChild(activeProject);

        const editProjectBtn = document.createElement("button");
        editProjectBtn.id = "editProjectBtn";
        if (active.edit === true) {
            editProjectBtn.classList.add("on");
        }
        header.appendChild(editProjectBtn);

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.id = "deleteProjectBtn";
        if (active.edit === false) {
            deleteProjectBtn.style.display = "none";
        }
        header.appendChild(deleteProjectBtn);

        const dueDateHeader = document.createElement("h3");
        dueDateHeader.classList.add("dueDateHeader");
        dueDateHeader.textContent = "Due Date";
        header.appendChild(dueDateHeader);

        const sortBtn = document.createElement("button");
        sortBtn.id = "sortBtn";
        header.appendChild(sortBtn);

        //content notes
        active.note.forEach(note => {
            const noteContainer = document.createElement("div");
            noteContainer.classList.add("note");
            noteContainer.id = note.noteID;
            content.appendChild(noteContainer);

            const noteHeader = document.createElement("div");
            noteHeader.classList.add("noteHeader");
            noteContainer.appendChild(noteHeader);

            const noteCheckedBtn = document.createElement("button");
            noteCheckedBtn.id = "noteCheckedBtn";
            if (note.checked === true) {
                noteCheckedBtn.classList.add("checked");
            } else {
                noteCheckedBtn.classList.add("unchecked");
            }
            noteHeader.appendChild(noteCheckedBtn);

            const noteTitle = document.createElement("input");
            noteTitle.type = "text";
            noteTitle.classList.add("noteTitle");
            noteTitle.value = note.title;
            if (note.edit === false) {
                noteTitle.disabled = true;
            }
            noteHeader.appendChild(noteTitle);

            const priorityFlag = document.createElement("h5");
            priorityFlag.classList.add("priorityFlag");
            priorityFlag.textContent = "High Priority";
            if (note.priority !== "high") {
                priorityFlag.style.display = "none";
            }
            noteHeader.appendChild(priorityFlag);

            const dueDate = document.createElement("input");
            dueDate.type = "text";
            dueDate.classList.add("dueDate");
            dueDate.value = note.dueDate;
            if (note.edit === false) {
                dueDate.disabled = true;
            }
            noteHeader.appendChild(dueDate);

            const expandBtn = document.createElement("button");
            expandBtn.id = "expandBtn";
            if (note.expand === false) {
                expandBtn.classList.add("collapsed");
            } else if (note.expand === true) {
                expandBtn.classList.add("expanded");
            }
            noteHeader.appendChild(expandBtn);

            const noteBody = document.createElement("div");
            noteBody.classList.add("noteBody");
            if (note.expand === false) {
                noteBody.style.display = "none";
            }
            noteContainer.appendChild(noteBody);

            const desc = document.createElement("textarea");
            desc.classList.add("desc");
            desc.rows = "3";
            desc.value = note.desc;
            if (note.edit === false) {
                desc.disabled = true;
            }
            noteBody.appendChild(desc);

            const list = document.createElement("div");
            list.classList.add("list");
            noteBody.appendChild(list);

            note.list.forEach(item => {
                const listItem = document.createElement("div");
                listItem.classList.add("listItem");
                listItem.id = item.itemID;
                list.appendChild(listItem);

                const listItemCheckedBtn = document.createElement("button");
                listItemCheckedBtn.id = "listItemCheckedBtn";
                if (item.checked === false) {
                    listItemCheckedBtn.classList.add("unchecked");
                } else if (item.checked === true) {
                    listItemCheckedBtn.classList.add("checked");
                }
                listItem.appendChild(listItemCheckedBtn)

                const listItemText = document.createElement("p");
                listItemText.classList.add("listItemText");
                listItemText.textContent = item.item;
                if (item.checked === true) {
                    listItemText.classList.add("checked");
                }
                listItem.appendChild(listItemText);

                const deleteListItemBtn = document.createElement("button");
                deleteListItemBtn.id = "deleteListItemBtn";
                if (note.edit === false) {
                    deleteListItemBtn.disabled = true;
                }
                listItem.appendChild(deleteListItemBtn)
            });

            const addListItem = document.createElement("div");
            addListItem.classList.add("addListItem");
            list.appendChild(addListItem);

            const addListItemBtn = document.createElement("button");
            addListItemBtn.id = "addListItemBtn";
            addListItem.appendChild(addListItemBtn);

            const inputListItem = document.createElement("input");
            inputListItem.type = "text";
            inputListItem.classList.add("inputListItem");
            inputListItem.placeholder = "New List Item";
            addListItem.appendChild(inputListItem);

            const noteCtrl = document.createElement("div");
            noteCtrl.classList.add("noteCtrl");
            noteBody.appendChild(noteCtrl);

            const priorityLabel = document.createElement("label");
            priorityLabel.htmlFor = "priority";
            priorityLabel.textContent = "Priority:";
            noteCtrl.appendChild(priorityLabel);

            const priority = document.createElement("select");
            priority.name = "priority";
            priority.id = "priority";
            if (note.edit === false) {
                priority.disabled = true;
            }
            noteCtrl.appendChild(priority);

            const high = document.createElement("option");
            high.value = "high";
            high.textContent = "High";
            if (note.priority === "high") {
                high.selected = true;
            }
            priority.appendChild(high);

            const medium = document.createElement("option");
            medium.value = "medium";
            medium.textContent = "Medium";
            if (note.priority === "medium") {
                medium.selected = true;
            }
            priority.appendChild(medium);

            const low = document.createElement("option");
            low.value = "low";
            low.textContent = "Low";
            if (note.priority === "low") {
                low.selected = true;
            }
            priority.appendChild(low);

            const editNoteBtn = document.createElement("button");
            editNoteBtn.id = "editNoteBtn";
            if (note.edit === true) {
                editNoteBtn.classList.add("on");
            }
            noteCtrl.appendChild(editNoteBtn);

            const deleteNoteBtn = document.createElement("button");
            deleteNoteBtn.id = "deleteNoteBtn";
            if (note.edit === false) {
                deleteNoteBtn.disabled = true;
            }
            noteCtrl.appendChild(deleteNoteBtn);
        });

        const addNoteBtn = document.createElement("button");
        addNoteBtn.id = "addNoteBtn";
        content.appendChild(addNoteBtn);
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
Projects.project[0].addNote("This is an example note", "Natus a non cumque tempore error distinctio? Aliquid sunt, nihil, dignissimos assumenda quia ea nisi, quas veniam ex debitis tempore doloribus dicta!", "Today", "high");
Projects.project[0].editOff();
Projects.project[0].note[0].addListItem("This is an example list item");
Projects.project[0].note[0].editNoteOff();
Projects.project[0].note[0].expandNote();
Projects.project[0].note[0].addListItem("Example checked item");
Projects.project[0].note[0].list[1].checkListItem();
Projects.project[0].addNote("This is a closed note", "description text", "Tomorrow", "medium");
console.log(Projects.project);