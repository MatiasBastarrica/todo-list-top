import { ToDo } from "./toDo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  toDos = [];

  rename(newName) {
    this.name = newName;
  }

  addToDo(name, desc, date, priority, status) {
    const toDo = new ToDo(name, desc, date, priority, status);
    this.toDos.push(toDo);
  }

  removeToDo(toDoName) {
    let index = this.toDos.indexOf(toDoName);
    this.toDos.splice(index, 1);
  }
}
