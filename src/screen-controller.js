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
      emptyModal(newProjectDialog);
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
      emptyModal(newToDoDialog);
      newToDoDialog.close();
    });
  }

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

  function populateContentSection(project) {
    emptyContentWindow();
    const toDos = project.toDos;
    const contentWindow = document.createElement("div");
    contentWindow.classList.add("content-window");

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.name;
    contentWindow.appendChild(projectTitle);

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("project-descprition");
    projectDesc.textContent = project.desc;
    contentWindow.appendChild(projectDesc);

    const addToDoBtn = document.createElement("button");
    addToDoBtn.classList.add("add-to-do-btn");
    addToDoBtn.textContent = "Add To-Do";
    contentWindow.appendChild(addToDoBtn);
    addToDoBtn.addEventListener("click", function (e) {
      newToDoDialog.showModal();
    });

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");
    contentWindow.appendChild(toDoList);

    if (toDos.length) {
      populateToDoSection(toDos);
    }

    contentSection.appendChild(contentWindow);
  }

  function populateToDoSection(toDos) {
    const toDoList = contentWindow.querySelector(".to-do-list");
    toDos.forEach((toDo) => {
      const toDoItem = createToDoHtml(toDo);
      toDoList.appendChild(toDoItem);
    });
  }

  function createToDoHtml(toDo) {
    const toDoItem = document.createElement("li");
    toDoItem.classList.add("to-do-list-item");

    const toDoHeader = document.createElement("div");
    toDoHeader.classList.add("to-do-header");
    toDoItem.appendChild(toDoHeader);

    const toDoBody = document.createElement("div");
    toDoBody.classList.add("to-do-body");
    toDoItem.appendChild(toDoBody);

    const toDoTitle = document.createElement("span");
    toDoTitle.classList.add("to-do-title");
    toDoTitle.textContent = toDo.title;
    toDoHeader.appendChild(toDoTitle);

    const toDoDesc = document.createElement("p");
    toDoDesc.classList.add("to-do-desc");
    toDoDesc.textContent = toDo.description;
    toDoBody.appendChild(toDoDesc);

    const toDoDate = document.createElement("span");
    toDoDate.classList.add("to-do-date");
    toDoDate.textContent = toDo.dueDate;
    toDoHeader.appendChild(toDoDate);

    const toDoPriority = document.createElement("span");
    toDoPriority.classList.add("to-do-priority");
    toDoPriority.textContent = toDo.priority;
    toDoHeader.appendChild(toDoPriority);

    return toDoItem;
  }

  function getProjects() {
    return console.log(projects);
  }

  function emptyModal(modal) {
    const textarea = modal.querySelector("textarea");
    const inputs = modal.querySelectorAll("input");

    textarea.value = "";
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  function emptyContentWindow() {
    const contentWindow = contentSection.querySelector(".content-window");
    if (contentWindow) {
      contentSection.removeChild(contentWindow);
    }
  }

  return {
    populateContentSection,
    addListeners,
    getProjects,
  };
})();

// Remove the getProjects method
// Only show one project and not more than one on the content window
