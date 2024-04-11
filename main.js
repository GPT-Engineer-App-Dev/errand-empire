document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  window.addTask = function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span class="task-content">${taskText}</span>
            <button onclick="toggleTaskCompletion(this)" class="ml-2 text-green-500"><i class="fas fa-check"></i></button>
            <button onclick="deleteTask(this)" class="text-red-500"><i class="fas fa-trash"></i></button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
  };

  window.toggleTaskCompletion = function (button) {
    const taskContent = button.parentNode.querySelector(".task-content");
    taskContent.classList.toggle("line-through");
  };

  window.deleteTask = function (button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
  };
});
