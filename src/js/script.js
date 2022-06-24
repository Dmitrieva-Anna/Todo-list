const tasksContainer = document.querySelector('.tasks-list');
const btnAdd = document.querySelector('.header__button');

const addTask = () => {
    const newTask = createTask();
    tasksContainer.appendChild(newTask);
};

const createTask = () => {
    const task = document.createElement("li");
    task.className = "tasks-list__item";
    task.id = `task_item_${Math.random()}`;

    const inputContainer = document.createElement("div");
    inputContainer.className = "tasks-list__item-task-box";

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    taskCheckbox.className = "tasks-list__item-input";
    taskCheckbox.name = `task_${Math.random()}`;
    taskCheckbox.value = "value";
    taskCheckbox.checked = false;
    taskCheckbox.id = taskCheckbox.name;

    const checkedSpan = document.createElement('span');
    checkedSpan.className = "fake-input";

    const label = document.createElement('label');
    label.htmlFor = taskCheckbox.name;
    label.className = "tasks-list__item-label";

    const taskTitle = document.createElement('p');
    taskTitle.className = "item-label__title";
    taskTitle.appendChild(document.createTextNode('title for task label'));

    const taskText = document.createElement('p');
    taskText.className = "item-label__text";
    taskText.appendChild(document.createTextNode('text for task label'));

    label.appendChild(taskTitle);
    label.appendChild(taskText);

    const btnRemove = document.createElement('div');
    btnRemove.className = "tasks-list__item-button-delete";

    btnRemove.addEventListener('click', (event) => {
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

btnAdd.addEventListener('click', () => addTask());

for (let i = 0; i < 4; i++) {
    addTask();
}




