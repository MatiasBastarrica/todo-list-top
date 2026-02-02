import { Project } from "./project";

console.log("Welcome, Odinite!!!");

const project1 = new Project("My first project");

project1.addToDo(
  "Reading",
  "Continue reading 'Brothers Karamazov'",
  "tonight",
  2,
  "unfinished",
);

console.log(project1);
