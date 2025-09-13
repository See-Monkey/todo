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

        if (Projects.project.length !== 0) {
            
        }

        // ===== sidebar header
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

        // ===== sidebar projects
        if (Projects.project.length !== 0) {
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
        }

        // ===== sidebar add project
        const addProject = document.createElement("div");
        addProject.classList.add("addProject");
        sidebar.appendChild(addProject);

        const inputProject = document.createElement("input");
        inputProject.type = "text";
        inputProject.classList.add("inputProject");
        inputProject.placeholder = "New Project";
        inputProject.size = "13";
        if (Projects.project.length !== 0) {
            inputProject.disabled = true;
        }
        addProject.appendChild(inputProject);

        const addProjectBtn = document.createElement("button");
        addProjectBtn.id = "addProjectBtn";
        addProject.appendChild(addProjectBtn);

        // ===== content header
    if (Projects.project.length !== 0) {

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

        // ===== content notes
        active.note.forEach(note => {
            const noteContainer = document.createElement("div");
            noteContainer.classList.add("note");
            noteContainer.id = note.noteID;
            if (note.checked === true) {
                noteContainer.classList.add("checked");
            }
            content.appendChild(noteContainer);

            const noteHeader = document.createElement("div");
            noteHeader.classList.add("noteHeader");
            if (note.checked === true) {
                noteHeader.classList.add("checked");
            }
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
            if (note.checked === true) {
                noteTitle.classList.add("checked");
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
            if (note.checked === true) {
                noteBody.classList.add("checked");
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
    }

        // ===== content add note
        const content = document.querySelector(".content");

        const addNoteBtn = document.createElement("button");
        addNoteBtn.id = "addNoteBtn";
        content.appendChild(addNoteBtn);

        const newNoteContainer = document.createElement("div");
        newNoteContainer.classList.add("note");
        newNoteContainer.classList.add("newNoteContainer");
        newNoteContainer.style.display = "none";
        content.appendChild(newNoteContainer);

        const newNoteHeader = document.createElement("div");
        newNoteHeader.classList.add("noteHeader");
        newNoteContainer.appendChild(newNoteHeader);

        const newNoteTitle = document.createElement("input");
        newNoteTitle.type = "text";
        newNoteTitle.classList.add("noteTitle");
        newNoteTitle.classList.add("newNoteTitle");
        newNoteTitle.placeholder = "New Note Title";
        newNoteHeader.appendChild(newNoteTitle);

        const newDueDate = document.createElement("input");
        newDueDate.type = "text";
        newDueDate.classList.add("dueDate");
        newDueDate.classList.add("newDueDate");
        newDueDate.placeholder = "Due Date";
        newNoteHeader.appendChild(newDueDate);

        const newNoteBody = document.createElement("div");
        newNoteBody.classList.add("noteBody");
        newNoteContainer.appendChild(newNoteBody);

        const newDesc = document.createElement("textarea");
        newDesc.classList.add("desc");
        newDesc.classList.add("newDesc");
        newDesc.rows = "3";
        newDesc.placeholder = "Description (optional)";
        newNoteBody.appendChild(newDesc);

        const newNoteCtrl = document.createElement("div");
        newNoteCtrl.classList.add("noteCtrl");
        newNoteBody.appendChild(newNoteCtrl);

        const newPriorityLabel = document.createElement("label");
        newPriorityLabel.htmlFor = "priority";
        newPriorityLabel.textContent = "Priority:";
        newNoteCtrl.appendChild(newPriorityLabel);

        const newPriority = document.createElement("select");
        newPriority.name = "priority";
        newPriority.id = "newPriority";
        newNoteCtrl.appendChild(newPriority);

        const high = document.createElement("option");
        high.value = "high";
        high.textContent = "High";

        newPriority.appendChild(high);

        const medium = document.createElement("option");
        medium.value = "medium";
        medium.textContent = "Medium";

        medium.selected = true;

        newPriority.appendChild(medium);

        const low = document.createElement("option");
        low.value = "low";
        low.textContent = "Low";
        newPriority.appendChild(low);

        const submitNoteBtn = document.createElement("button");
        submitNoteBtn.id = "submitNoteBtn";
        newNoteCtrl.appendChild(submitNoteBtn);
    }



    init() {
        this.redraw();
    }

    activeProjectIndex() {
        const index = Projects.project.findIndex(project => project.active === true);
        return index;
    }

    setActive(id) {
        const index = Projects.project.findIndex(project => project.projectID === id);
        Projects.setActive(index);
        this.redraw();
    }

    addProject() {
        const inputProject = document.querySelector(".inputProject");

        if (inputProject.disabled === true) {
            inputProject.disabled = false;
            inputProject.focus();
            return;
        } else {
            if (inputProject.value === "") {
                alert("Please enter a project name.");
            } else {
                Projects.addProject(inputProject.value);
                inputProject.disable = true;
                this.redraw();
            }
        }
    }

    editProject() {
        const activeProject = document.querySelector(".activeProject");
        const index = this.activeProjectIndex();

        if (activeProject.disabled === true) {
            Projects.project[index].editOn();
            this.redraw();
            activeProject.focus();
            return;
        } else {
            if (activeProject.value === "") {
                alert("Project name cannot be empty.");
            } else {
                Projects.project[index].name = activeProject.value;
                Projects.project[index].editOff();
                this.redraw();
            }
        }
    }

    deleteProject() {
        const activeProject = this.activeProjectIndex();
        Projects.project.splice(activeProject, 1);

        if (Projects.project.length !== 0) {
            Projects.setActive(0);
        }
        this.redraw();
    }

    //sort

    noteCheck(id) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === id);
        if (Projects.project[activeProject].note[targetNoteIndex].checked === false) {
        Projects.project[activeProject].note[targetNoteIndex].checkNote();
        } else if (Projects.project[activeProject].note[targetNoteIndex].checked === true) {
        Projects.project[activeProject].note[targetNoteIndex].uncheckNote();
        }
        this.redraw();
    }

    expand(id) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === id);
        if (Projects.project[activeProject].note[targetNoteIndex].expand === false) {
        Projects.project[activeProject].note[targetNoteIndex].expandNote();
        } else if (Projects.project[activeProject].note[targetNoteIndex].expand === true) {
        Projects.project[activeProject].note[targetNoteIndex].collapseNote();
        }
        this.redraw();
    }

    listCheck(listID, noteID) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === noteID);
        const targetListIndex = Projects.project[activeProject].note[targetNoteIndex].list.findIndex(listItem => listItem.itemID === listID);
        if (Projects.project[activeProject].note[targetNoteIndex].list[targetListIndex].checked === false) {
            Projects.project[activeProject].note[targetNoteIndex].list[targetListIndex].checkListItem();
            this.redraw();
        } else {
            Projects.project[activeProject].note[targetNoteIndex].list[targetListIndex].uncheckListItem();
            this.redraw();
        }
    }

    deleteListItem(listID, noteID) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === noteID);
        const targetListIndex = Projects.project[activeProject].note[targetNoteIndex].list.findIndex(listItem => listItem.itemID === listID);
        Projects.project[activeProject].note[targetNoteIndex].deleteListItem(targetListIndex);
        this.redraw();
    }

    addListItem(noteID) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === noteID);
        const inputListItem = document.querySelector(`#${CSS.escape(noteID)} .inputListItem`);
        if (inputListItem.value === "") {
            alert("List item cannot be empty");
        } else {
            Projects.project[activeProject].note[targetNoteIndex].addListItem(inputListItem.value);
            this.redraw();
        }
    }

    editNote(id) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === id);
        const activeProjectTitle = document.querySelector(`#${CSS.escape(id)} .noteTitle`);
        const activeProjectDueDate = document.querySelector(`#${CSS.escape(id)} .dueDate`);
        const activeProjectDesc = document.querySelector(`#${CSS.escape(id)} .desc`);
        const activeProjectPriority = document.querySelector(`#${CSS.escape(id)} #priority`);
        
        if (Projects.project[activeProject].note[targetNoteIndex].edit === false) {
        Projects.project[activeProject].note[targetNoteIndex].editNoteOn();
        this.redraw();
        return;
        } else if (Projects.project[activeProject].note[targetNoteIndex].edit === true) {
            if (activeProjectTitle.value === "") {
                alert("Note must have a name.");
            } else if (activeProjectDueDate.value === "") {
                alert("Note must have a due date.")
            } else {
                Projects.project[activeProject].note[targetNoteIndex].title = activeProjectTitle.value;
                Projects.project[activeProject].note[targetNoteIndex].dueDate = activeProjectDueDate.value;
                Projects.project[activeProject].note[targetNoteIndex].desc = activeProjectDesc.value;
                Projects.project[activeProject].note[targetNoteIndex].priority = activeProjectPriority.value;
                Projects.project[activeProject].note[targetNoteIndex].editNoteOff();
            }
        }
        this.redraw();
    }

    deleteNote(id) {
        const activeProject = this.activeProjectIndex();
        const targetNoteIndex = Projects.project[activeProject].note.findIndex(note => note.noteID === id);
        Projects.project[activeProject].note.splice(targetNoteIndex, 1);
        this.redraw();
    }

    addNote() {
        const addNoteBtn = document.querySelector("#addNoteBtn");
        const newNoteContainer = document.querySelector(".newNoteContainer");

        if (addNoteBtn.disabled === false) {
            addNoteBtn.disabled = true;
            newNoteContainer.style.display = "flex";
        }
    }

    submitNote() {
        const newNoteTitle = document.querySelector(".newNoteTitle");
        const newDueDate = document.querySelector(".newDueDate");
        const newDesc = document.querySelector(".newDesc");
        const newPriority = document.querySelector("#newPriority");

        if (newNoteTitle.value === "") {
            alert("Note must have a title.");
        } else if (newDueDate.vale === "") {
            alert("Note must have a due date.");
        } else {
            const index = this.activeProjectIndex();
            Projects.project[index].addNote(newNoteTitle.value, newDesc.value, newDueDate.value, newPriority.value);
            this.redraw();
        }
    }
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