// script.js
const todoList = document.getElementById('todo-list');
const newItemInput = document.getElementById('new-item');
const addItemButton = document.getElementById('add-item');

addItemButton.addEventListener('click', addNewItem);

function addNewItem() {
    const newItemText = newItemInput.value.trim();
    if (newItemText === '') return;

    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    todoList.appendChild(newItem);

    newItemInput.value = '';
}

todoList.addEventListener('click', toggleCompleted);

function toggleCompleted(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}