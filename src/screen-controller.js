import { Project } from "./project.js";

export const ScreenController = (function () {
  const btnAddProject = document.querySelector(".btn-add-project");
  const projectsList = document.querySelector(".projects-list");
  const contentSection = document.querySelector(".to-do__content");
  const newProjectDialog = document.querySelector(".new-project-dialog");
  const newProjectDialogBtn = document.querySelector(
    ".new-project-dialog__btn",
  );
  const newToDoDialog = document.querySelector(".new-to-do-dialog");
  const newToDoDialogBtn = document.querySelector(".new-to-do-dialog__btn");

  const projects = [];
  let currentProject;

  function addListeners() {
    btnAddProject.addEventListener("click", function (e) {
      newProjectDialog.showModal();
    });

    newProjectDialogBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const name = newProjectDialog.querySelector("#name").value;
      const desc = newProjectDialog.querySelector("textarea").value;
      const newProject = new Project(name, desc);
      addProjectToSidebar(newProject);
      projects.push(newProject);
      newProjectDialog.close();
    });

    newToDoDialogBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const title = newToDoDialog.querySelector("#title").value;
      const desc = newToDoDialog.querySelector("textarea").value;
      const dueDate = newToDoDialog.querySelector("#dueDate").value;
      const priority = newToDoDialog.querySelector("#priority").value;
      currentProject.addToDo(title, desc, dueDate, priority, "unfinished");
      populateNewToDo(currentProject.toDos[currentProject.toDos.length - 1]);
      newToDoDialog.close();
    });
  }

  function getCurrentProject() {}

  function addProjectToSidebar(project) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    listItem.appendChild(link);
    link.href = "#";
    link.textContent = project.name;
    projectsList.appendChild(listItem);
    link.addEventListener("click", function (e) {
      populateContentSection(project);
      currentProject = project;
    });
  }

  function populateNewToDo(toDo) {
    const toDoList = contentSection.querySelector(".to-do-list");
    const toDoItem = createToDoHtml(toDo);
    toDoList.appendChild(toDoItem);
  }

  // function addProject(list) {
  //   const listItem = document.createElement("li");

  //   const input = document.createElement("input");
  //   input.type = "text";
  //   listItem.appendChild(input);
  //   const inputBtn = document.createElement("button");
  //   inputBtn.textContent = "Ok";
  //   listItem.appendChild(inputBtn);

  //   inputBtn.addEventListener("click", function () {
  //     const name = input.value;
  //     const newProject = new Project(name);
  //     projects.push(newProject);
  //     list.removeChild(list.lastChild);
  //     const listItem = document.createElement("li");
  //     const link = document.createElement("a");
  //     link.href = "#";
  //     link.textContent = name;
  //     listItem.appendChild(link);
  //     link.addEventListener("click", function (e) {
  //       const project = projects.filter(function (project) {
  //         return project.name === name;
  //       })[0];
  //       populateContentSection(project);
  //     });

  //     list.appendChild(listItem);
  //   });

  //   list.appendChild(listItem);
  //   // ScreenController.getProjects();
  // }

  function populateContentSection(project) {
    const toDos = project.toDos;

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.name;
    contentSection.appendChild(projectTitle);

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("project-descprition");
    projectDesc.textContent = project.desc;
    contentSection.appendChild(projectDesc);

    const addToDoBtn = document.createElement("button");
    addToDoBtn.classList.add("add-to-do-btn");
    addToDoBtn.textContent = "Add To-Do";
    contentSection.appendChild(addToDoBtn);
    addToDoBtn.addEventListener("click", function (e) {
      // show a modal to get the values of the todo
      // project.addToDo()
      newToDoDialog.showModal();
    });

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");
    contentSection.appendChild(toDoList);

    if (toDos.length) {
      populateToDoSection(toDos);
    }
  }

  function populateToDoSection(toDos) {
    const toDoList = contentSection.querySelector(".to-do-list");
    toDos.forEach((toDo) => {
      const toDoItem = createToDoHtml(toDo);
      toDoList.appendChild(toDoItem);
    });
  }

  function createToDoHtml(toDo) {
    const toDoItem = document.createElement("li");
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

    return toDoItem;
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

// Remove the getProjects method
