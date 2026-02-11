import "./styles.css";
import { Project } from "./project";
import { ScreenController } from "./screen-controller.js";

ScreenController.addListeners();

console.log("Welcome, Odinite!!!");

// const project1 = new Project(
//   "My first project",
//   "This is just an experimental project",
// );

// project1.addToDo(
//   "Reading",
//   "Continue reading 'Brothers Karamazov'",
//   "tonight",
//   "high",
//   false,
// );

// project1.addToDo(
//   "Hygiene",
//   "Take a shower after cleaning",
//   "Now",
//   "medium",
//   false,
// );

// const project2 = new Project(
//   "My second project",
//   "This is just an experimental project",
// );

// project2.addToDo(
//   "Writing",
//   "Continue writing your journal",
//   "next week",
//   "urgent",
//   false,
// );

// project2.addToDo(
//   "Listening",
//   "Listen the new episode of the Grit",
//   "tomorrow",
//   "low",
//   false,
// );

// const projects = [project1, project2];

// localStorage.setItem("projects", JSON.stringify(projects));

// console.log(project1);

// project1.removeToDo("Reading");

// console.log(project1.toDos.length);

// ScreenController.getProjects();

if (localStorage.getItem("projects")) {
  ScreenController.loadProjects();
}
