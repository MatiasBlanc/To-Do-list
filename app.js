// Form Container
const form = document.getElementById('form');
// Task Container
const taskList = document.getElementById("taskList");
const itemTemplate = document.getElementById("item").content;
const taskThrow= document.getElementsByClassName('task__throw')

form.addEventListener('submit', evt => {
    const taskValue = form.inputTask.value.trim();
    if(taskValue) {
        const clone = itemTemplate.cloneNode(true);
        const text = clone.querySelector(".task__text");
        
        taskList.classList.add('list__task');
        text.textContent = taskValue;
        form.inputTask.value = '';
        taskList.appendChild(clone);
    }
    evt.preventDefault();
});

taskList.addEventListener('click', evt => {
    if(evt.target.classList.contains('task__throw')) {
        const clickDelete = evt.target.parentElement;
        clickDelete.remove()
    }

    if(taskList.children.length === 0) {
        taskList.classList.remove('list__task');
    }
})