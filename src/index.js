import { Project } from "./project";
import { ScreenController } from "./screen-controller.js";

ScreenController.addListeners();

console.log("Welcome, Odinite!!!");

const project1 = new Project(
  "My first project",
  "This is just an experimental project",
);

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

ScreenController.getProjects();
