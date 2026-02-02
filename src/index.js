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

project1.addToDo(
  "Hygiene",
  "Take a shower after cleaning",
  "Now",
  5,
  "unfinished",
);

console.log(project1);

project1.removeToDo("Reading");
