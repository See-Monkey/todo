class Projects {
    constructor() {
        this.project = [];
    }

    addProject(name) {
        const newProject = new Project(name);
        this.project.push(newProject);
        this.setActive(this.project.length - 1)
    }

    deleteProject(index) {
        this.project.splice[index, 1];
    }
    
    setActive(index) {
        this.project.forEach(project => {
            project.active = false;
        });
        this.project[index].active = true;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.note = [];
        this.active = false;
        this.edit = false;
        this.projectID = crypto.randomUUID();
    }

        addNote(title, desc, dueDate, priority) {
            const newNote = new Note(title, desc, dueDate, priority);
            this.note.push(newNote);
        }

        deleteNote(index) {
            this.note.splice(index, 1);
        }

        editOn() {
            this.edit = true;
        }

        editOff() {
            this.edit = false;
        }

        //sort notes  
}

class Note {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = [];
        this.checked = false;
        this.edit = false;
        this.expand = false;
        this.noteID = crypto.randomUUID();
    }

    addListItem(item) {
        const newListItem = new ListItem(item);
        this.list.push(newListItem);
    }

    deleteListItem(index) {
        this.list.splice(index, 1);
    }

    editNoteOn() {
        this.edit = true;
    }

    editNoteOff() {
        this.edit = false;
    }

    checkNote() {
        this.checked = true;

        this.list.forEach(item => {
        item.checked = true;
        });
    }

    uncheckNote() {
        this.checked = false;

        this.list.forEach(item => {
        item.checked = false;
        });
    }

    expandNote() {
        this.expand = true;
    }

    collapse() {
        this.expand = false;
    }
}

class ListItem {
    constructor(item) {
        this.item = item;
        this.checked = false;
        this.itemID = crypto.randomUUID();
    }

    checkListItem() {
        this.checked = true;
    }

    uncheckListItem() {
        this.checked = false;
    }
}

export default Projects;