function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') return; // Prevent empty tasks

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span class="task-text">${taskInput.value}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function deleteTask(button) {
    button.parentElement.remove();
}

function editTask(button) {
    const taskText = button.previousElementSibling;
    const newText = prompt("Edit your task:", taskText.innerText);
    if (newText !== null && newText.trim() !== '') {
        taskText.innerText = newText;
    }
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = 'gray';
    } else {
        taskText.style.textDecoration = 'none';
        taskText.style.color = 'white';
    }
}
