class Projects {
    constructor() {
        this.project = [];
    }

    addProject(name) {
        const newProject = new Project(name);
        this.project.push(newProject);
    }

    deleteProject(index) {
        this.project.splice[index, 1];
    }

    toggleEdit(index) {
        if (this.project[index].edit === false) {
            this.editOn(index);
        } else {
            this.submitEdit(index);
        }
    }

    editOn(index) {
        this.project[index].edit = true;
    }

    submitEdit(index, name) {
        //get value from display
        //set value to array at index
        this.editOff(index);
    }

    editOff(index) {
        this.project[index].edit = false;
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
    }

        addNote(title, desc, dueDate, priority) {
            const newNote = new Note(title, desc, dueDate, priority);
            this.note.push(newNote);
        }

        deleteNote(index) {
            this.note.splice(index, 1);
        }
       
        toggleEditNote(index) {
            if (this.note[index].edit === false) {
                this.editNoteOn(index);
            } else {
                this.submitNoteEdit(index);
            }
        }

        editNoteOn(index) {
            this.note[index].edit = true;
        }

        submitNoteEdit(index, title, desc, dueDate, priority) {
            //get values from display
            //set values to array at index
            this.editNoteOff(index);
        }

        editNoteOff(index) {
            this.note[index].edit = false;
        }

        checkNote(index) {
            this.note[index].checked = true;

            this.note[index].list.forEach(item => {
            item.checked = true;
            });
        }

        uncheckNote(index) {
            this.note[index].checked = false;

            this.note[index].list.forEach(item => {
            item.checked = false;
            });
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
    }

    addListItem(item) {
        const newListItem = new ListItem(item);
        this.list.push(newListItem);
    }

    deleteListItem(index) {
        this.list.splice(index, 1);
    }

    checkListItem(index) {
        this.list[index].checked = true;
    }

    uncheckListItem(index) {
        this.list[index].checked = false;
    }
}

class ListItem {
    constructor(item) {
        this.item = item;
        this.checked = false;
    }
}

export default Projects;