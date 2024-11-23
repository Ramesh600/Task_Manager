// Select DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Task array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
                <button class="complete" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask(e) {
    e.preventDefault();
    
    if (taskInput.value.trim() === '') return;

    const newTask = {
        text: taskInput.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt('Edit Task:', tasks[index].text);
    if (newTaskText) {
        tasks[index].text = newTaskText;
        renderTasks();
    }
}

// Function to toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Add event listener for form submission
taskForm.addEventListener('submit', addTask);

// Initial rendering of tasks
renderTasks();
