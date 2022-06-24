"use strict";

var tasksContainer = document.querySelector('.tasks-list');
var btnAdd = document.querySelector('.header__button');

var addTask = function addTask() {
  var newTask = createTask();
  tasksContainer.appendChild(newTask);
};

var createTask = function createTask() {
  var task = document.createElement("li");
  task.className = "tasks-list__item";
  task.id = "task_item_".concat(Math.random());
  var inputContainer = document.createElement("div");
  inputContainer.className = "tasks-list__item-task-box";
  var taskCheckbox = document.createElement('input');
  taskCheckbox.type = "checkbox";
  taskCheckbox.className = "tasks-list__item-input";
  taskCheckbox.name = "task_".concat(Math.random());
  taskCheckbox.value = "value";
  taskCheckbox.checked = false;
  taskCheckbox.id = taskCheckbox.name;
  var checkedSpan = document.createElement('span');
  checkedSpan.className = "fake-input";
  var label = document.createElement('label');
  label.htmlFor = taskCheckbox.name;
  label.className = "tasks-list__item-label";
  var taskTitle = document.createElement('p');
  taskTitle.className = "item-label__title";
  taskTitle.appendChild(document.createTextNode('title for task label'));
  var taskText = document.createElement('p');
  taskText.className = "item-label__text";
  taskText.appendChild(document.createTextNode('text for task label'));
  label.appendChild(taskTitle);
  label.appendChild(taskText);
  var btnRemove = document.createElement('div');
  btnRemove.className = "tasks-list__item-button-delete";
  btnRemove.addEventListener('click', function (event) {
    event.stopPropagation();
    tasksContainer.removeChild(task);
  });
  inputContainer.appendChild(taskCheckbox);
  inputContainer.appendChild(checkedSpan);
  inputContainer.appendChild(label);
  task.appendChild(inputContainer);
  task.appendChild(btnRemove);
  return task;
};

btnAdd.addEventListener('click', function () {
  return addTask();
});

for (var i = 0; i < 4; i++) {
  addTask();
}
//# sourceMappingURL=script.js.map
