document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo}</span>
                <div>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            todoList.appendChild(li);
        });
        saveTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = input.value.trim();
        if (todo) {
            todos.push(todo);
            input.value = '';
            renderTodos();
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            todos.splice(index, 1);
            renderTodos();
        } else if (e.target.classList.contains('edit-btn')) {
            const index = e.target.dataset.index;
            const newTodo = prompt('Edit task:', todos[index]);
            if (newTodo !== null) {
                todos[index] = newTodo.trim();
                renderTodos();
            }
        }
    });

    renderTodos();
});