let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let deleteButton = document.querySelector('.delete');
let todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}else{
    todo.innerHTML = ''
}

addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
})

addMessage.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        if (addMessage.value) {
            event.preventDefault();
            let newTodo = {
                todo: addMessage.value,
                checked: false,
                important: false
            };
            todoList.push(newTodo);
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }else{
            alert("Введите описание!")
        }
    }
})

todo.addEventListener('dblclick', (event) => {
    event.preventDefault();
    todoList.forEach(function(item, i) {
        if (item.todo === event.target.innerHTML) {
            todoList.splice(i, 1);
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        })
})

function displayMessages() {
    let displayMsg = '';
    todoList.forEach(function(item, i) {
        displayMsg += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}' class='${item.important ? 'important' : ''}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMsg;
    })
}