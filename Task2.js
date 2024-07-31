document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    newTask.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    taskList.appendChild(newTask);
    document.getElementById('new-task').value = '';
});
