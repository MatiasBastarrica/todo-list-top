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
  let currentToDo;

  const ProjectDialog = (function () {
    const dialog = document.querySelector(".new-project-dialog");
    const btn = document.querySelector(".new-project-dialog__btn");

    const nameInput = dialog.querySelector("#name");
    const descInput = dialog.querySelector("textarea");

    return {
      dialog,
      btn,
      nameInput,
      descInput,
    };
  })();

  const ToDoDialog = (function () {
    const dialog = document.querySelector(".new-to-do-dialog");
    const btn = document.querySelector(".new-to-do-dialog__btn");

    const titleInput = dialog.querySelector("#title");
    const descInput = dialog.querySelector("textarea");
    const dueDateInput = dialog.querySelector("#dueDate");
    const priorityInput = dialog.querySelector("#priority");

    return {
      dialog,
      btn,
      titleInput,
      descInput,
      dueDateInput,
      priorityInput,
    };
  })();

  function addListeners() {
    btnAddProject.addEventListener("click", function (e) {
      ProjectDialog.dialog.showModal();
    });

    ProjectDialog.btn.addEventListener("click", function (e) {
      e.preventDefault();
      const name = ProjectDialog.nameInput.value;
      const desc = ProjectDialog.descInput.value;
      const newProject = new Project(name, desc);
      addProjectToSidebar(newProject);
      projects.push(newProject);
      emptyModal(ProjectDialog.dialog);
      ProjectDialog.dialog.close();
    });

    ToDoDialog.btn.addEventListener("click", function (e) {
      e.preventDefault();
      const title = ToDoDialog.titleInput.value;
      const desc = ToDoDialog.descInput.value;
      const dueDate = ToDoDialog.dueDateInput.value;
      const priority = ToDoDialog.priorityInput.value;
      currentProject.addToDo(title, desc, dueDate, priority, "unfinished");
      populateNewToDo(currentProject.toDos[currentProject.toDos.length - 1]);
      emptyModal(ToDoDialog.dialog);
      ToDoDialog.dialog.close();
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
      ToDoDialog.dialog.showModal();
    });

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");
    contentWindow.appendChild(toDoList);

    if (toDos.length) {
      populateToDoSection(toDos, contentWindow);
    }

    contentSection.appendChild(contentWindow);
  }

  function populateToDoSection(toDos, contentWindow) {
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

    const headerText = document.createElement("div");
    toDoHeader.appendChild(headerText);
    headerText.classList.add("to-do-header__text");

    const toDoTitle = document.createElement("span");
    toDoTitle.classList.add("to-do-title");
    toDoTitle.textContent = toDo.title;
    headerText.appendChild(toDoTitle);

    const headerTags = document.createElement("div");
    headerTags.classList.add("to-do-header-tags");
    headerText.appendChild(headerTags);

    const toDoDate = document.createElement("span");
    toDoDate.classList.add("to-do-date");
    toDoDate.textContent = toDo.dueDate;
    headerTags.appendChild(toDoDate);

    const toDoPriority = document.createElement("span");
    toDoPriority.classList.add("to-do-priority");
    toDoPriority.textContent = toDo.priority;
    headerTags.appendChild(toDoPriority);

    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.classList.add("to-do-see-more-btn");
    seeMoreBtn.textContent = "See more";
    toDoHeader.appendChild(seeMoreBtn);
    seeMoreBtn.addEventListener("click", function (e) {
      toDoBody.classList.toggle("hidden");
    });

    const toDoBody = document.createElement("div");
    toDoBody.classList.add("to-do-body", "hidden");
    toDoItem.appendChild(toDoBody);

    const toDoDesc = document.createElement("p");
    toDoDesc.classList.add("to-do-desc");
    toDoDesc.textContent = toDo.description;
    toDoBody.appendChild(toDoDesc);

    const toDoEditBtn = document.createElement("button");
    toDoEditBtn.classList.add("to-do-edit-btn");
    toDoEditBtn.textContent = "Edit";
    toDoBody.appendChild(toDoEditBtn);

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
