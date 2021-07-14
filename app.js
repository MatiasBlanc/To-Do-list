// form container
const form = document.getElementById('form');
const input = document.getElementById('input-text');
// task container
const list = document.getElementById("list");
const itemTemplate = document.getElementById("item").content;
const fragment = document.createDocumentFragment();


form.addEventListener('submit', evt => {
    const taskValue = input.value;
    function validation () {
        if(taskValue.length === 0) {
        } else {
            list.classList.add('list__task')
            const clone = itemTemplate.cloneNode(true);
            const text = clone.querySelector(".task__text");
            text.textContent = taskValue;
            fragment.appendChild(clone);
            list.appendChild(fragment);
        }
    }

    validation()
    evt.preventDefault()
});