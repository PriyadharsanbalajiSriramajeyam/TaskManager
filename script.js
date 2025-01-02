const taskList = document.getElementById('task-list');

function addTask() {
    const taskInput = document.getElementById('task-input');
    const priority = document.getElementById('priority');
    const taskDate = document.getElementById('task-date');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <span class="priority">${priority.value}</span>
        <span>${taskDate.value ? new Date(taskDate.value).toDateString() : 'No Date'}</span>
        <div>
            <button class="btn edit" onclick="editTask(this)">Edit</button>
            <button class="btn delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(taskDiv);
    taskInput.value = '';
    taskDate.value = '';
}

function deleteTask(button) {
    button.closest('.task').remove();
}

function editTask(button) {
    const taskDiv = button.closest('.task');
    const taskText = taskDiv.querySelector('span').textContent;
    const newTask = prompt('Edit Task:', taskText);

    if (newTask) {
        taskDiv.querySelector('span').textContent = newTask;
    }
}

// Doodle rotation logic
const doodleContainer = document.getElementById('doodle-container');
const doodles = [
    ["https://cdn-icons-png.flaticon.com/512/2784/2784461.png", "Checklist Doodle"],
    ["https://cdn-icons-png.flaticon.com/512/3050/3050243.png", "Calendar Doodle"],
    ["https://cdn-icons-png.flaticon.com/512/2885/2885710.png", "Clock Doodle"],
    ["https://cdn-icons-png.flaticon.com/512/2777/2777629.png", "Lightbulb Doodle"],
    ["https://cdn-icons-png.flaticon.com/512/2921/2921222.png", "Pencil Doodle"],
    ["https://cdn-icons-png.flaticon.com/512/2917/2917994.png", "Goal Doodle"]
];

function changeDoodles() {
    doodleContainer.innerHTML = '';
    doodles.sort(() => Math.random() - 0.5).slice(0, 4).forEach((doodle, index) => {
        const img = document.createElement('img');
        img.src = doodle[0];
        img.alt = doodle[1];
        img.className = 'doodle';

        img.style.top = `${10 + index * 10}%`;
        img.style.left = index % 2 === 0 ? `${10 + index * 5}%` : 'auto';
        img.style.right = index % 2 === 1 ? `${15 - index * 5}%` : 'auto';
        img.style.bottom = index % 2 === 0 ? `${10 + index * 5}%` : 'auto';

        doodleContainer.appendChild(img);
    });
}

setInterval(changeDoodles, 60000); // Change doodles every minute
changeDoodles();