const ScreenController = (function () {
  const btnAddProject = document.querySelector(".btn-add-project");
  const contentSection = document.querySelector(".to-do__content");

  //   const projects = [];

  //   btnAddProject.addEventListener("click", function (e) {

  //   })

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

  return {
    populateContentSection,
  };
})();
