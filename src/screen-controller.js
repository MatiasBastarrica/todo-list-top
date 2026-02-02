import { Project } from "./project.js";

export const ScreenController = (function () {
  const btnAddProject = document.querySelector(".btn-add-project");
  const projectsList = document.querySelector(".projects-list");
  const contentSection = document.querySelector(".to-do__content");

  const projects = [];

  function addListeners() {
    btnAddProject.addEventListener("click", function (e) {
      addProject(projectsList);
    });
  }

  function addProject(list) {
    const listItem = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    listItem.appendChild(input);
    const inputBtn = document.createElement("button");
    inputBtn.textContent = "Ok";
    listItem.appendChild(inputBtn);

    inputBtn.addEventListener("click", function () {
      const name = input.value;
      const newProject = new Project(name);
      projects.push(newProject);
      list.removeChild(list.lastChild);
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = name;
      listItem.appendChild(link);

      // listItem.textContent = name;
      list.appendChild(listItem);
    });

    list.appendChild(listItem);
    ScreenController.getProjects();
  }

  function populateContentSection(project) {
    const toDos = project.toDos;

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.name;
    contentSection.appendChild(projectTitle);

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("project-descprition");
    projectDesc.textContent = project.desc;

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDos.forEach((toDo) => {
      const toDoItem = document.createElement(li);
      toDoItem.classList.add("to-do-list-item");

      const toDoTitle = document.createElement("h2");
      toDoTitle.classList.add("to-do-title");
      toDoTitle.textContent = toDo.title;
      toDoItem.appendChild(toDoTitle);

      const toDoDesc = document.createElement("p");
      toDoDesc.classList.add("to-do-desc");
      toDoDesc.textContent = toDo.description;
      toDoItem.appendChild(toDoDesc);

      const toDoDate = document.createElement("p");
      toDoDate.classList.add("to-do-date");
      toDoDate.textContent = toDo.dueDate;
      toDoItem.appendChild(toDoDate);

      const toDoPriority = document.createElement("p");
      toDoPriority.classList.add("to-do-priority");
      toDoPriority.textContent = toDo.priority;
      toDoItem.appendChild(toDoPriority);

      toDoList.appendChild(toDoItem);
    });
  }

  function getProjects() {
    return console.log(projects);
  }

  return {
    populateContentSection,
    addListeners,
    getProjects,
  };
})();
