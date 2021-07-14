// Form Container
const form = document.getElementById('form');
const input = document.getElementById('input-text');
// Task Container
const taskList = document.getElementById("taskList");
const itemTemplate = document.getElementById("item").content;

form.addEventListener('submit', evt => {
    const taskValue = input.value.trim();
    const addTask = () => {
        if(taskValue != "") {
            taskList.classList.add('list__task');
            const clone = itemTemplate.cloneNode(true);
            const text = clone.querySelector(".task__text");
            text.textContent = taskValue;
            taskList.appendChild(clone);
        }
    }

    addTask();
    evt.preventDefault();
});

