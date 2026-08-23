const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-message');

let tasks = [];

function addTask(event) {
  event.preventDefault();

  const taskText = input.value.trim();

  if (taskText === '') {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(newTask);
  input.value = '';

  renderTasks();
}


function renderTasks() {
  list.innerHTML = '';

  if (tasks.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.id = task.id;

    if (task.completed) {
      li.classList.add('completed');
    }

    list.appendChild(li);
  });
}

form.addEventListener('submit', addTask);

renderTasks();