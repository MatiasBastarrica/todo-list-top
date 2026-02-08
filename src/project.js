import { ToDo } from "./toDo.js";

export class Project {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }

  toDos = [];

  rename(newName, newDesc) {
    this.name = newName;
    this.desc = newDesc;
  }

  addToDo(title, desc, date, priority, checked) {
    const toDo = new ToDo(title, desc, date, priority, checked);
    this.toDos.push(toDo);
  }

  removeToDo(toDoName) {
    let index = this.toDos.indexOf(toDoName);
    this.toDos.splice(index, 1);
  }
}
