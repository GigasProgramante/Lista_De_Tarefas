// Seleção dos elementos do DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-message');

// Array que vai armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask(event) {
  event.preventDefault();

  const taskText = input.value.trim();

  // Não permite adicionar tarefa vazia
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

  renderTasks(); // atualiza a tela (função que  ainda vou criar)
}

form.addEventListener('submit', addTask);