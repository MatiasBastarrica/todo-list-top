import { ToDo } from "./toDo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  toDos = [];

  addToDo(name, desc, date, priority, status) {
    const toDo = new ToDo(name, desc, date, priority, status);
    this.toDos.push(toDo);
  }
}
