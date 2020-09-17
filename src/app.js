// UI Elements
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoFilterInput = document.querySelector("#filter-input")
const todoList = document.querySelector("#todo-list")
const todoClearButton = document.querySelector("#clear-todos")

loadEventListener()

// Event Listener
function loadEventListener() {
    todoForm.addEventListener("submit", addTodo)
    todoList.addEventListener("click", deleteTodo)
    todoClearButton.addEventListener("click", clearTodo)
    todoFilterInput.addEventListener("keyup", filterTodo)
    document.addEventListener("DOMContentLoaded", getTodos)
}

// DOM Function

function getTodos() {
    const todos = getItemFromLocalStorage()
    todos.forEach((todo) => {
        todoListElement(todo)
    });
}

/*
    preventDefault() is a method that prevents the occurrence of a built-in DOM event, 
    for example the "a href" tag if we click, the browser page will reload, 
    or a form if we click the submit button it will also reload.
*/

function addTodo(e) {
    e.preventDefault()
    if (todoInput.value) {
        let todoInputValue = todoInput.value
        todoListElement(todoInputValue)
        // add data to localStorage
        addItemToLocalStorage(todoInputValue)
        // set todoInput to empty
        todoInput.value = ""
    }
    else {
        alert("Enter your todos title")
    }
}

function addItemToLocalStorage(title) {
    const todos = getItemFromLocalStorage()
    todos.push(title)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getItemFromLocalStorage() {
    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

function todoListElement(value) {
    let title = document.createTextNode(value)
    const li = document.createElement("li")
    const a = document.createElement("a")
    // li element
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1 todo-item"
    li.appendChild(title)
    // a element
    a.href = "#"
    a.className = "badge badge-danger delete-todo"
    a.innerHTML = "Delete"
    // inserts a element into li children
    li.appendChild(a)
    // inserts li element into todoList children
    todoList.appendChild(li)
}

function deleteTodo(e) {
    e.preventDefault()
    if (e.target.classList.contains("delete-todo")) {
        if (confirm("Apakah anda ingin menghapus?")) {
            const parent = e.target.parentElement;
            parent.remove()
        }
    }
}

function clearTodo() {
    todoList.innerHTML = ""
}

/*
    The indexOf() method returns the position of the first occurrence of a specified value in a string. 
    This method returns -1 if the value to search for never occurs.
    Note: The indexOf() method is case sensitive.
    Tip: Also look at the lastIndexOf() method.

    source : https://www.w3schools.com/
*/

function filterTodo(e) {
    const filterText = e.target.value.toLowerCase()
    const todoItem = document.querySelectorAll(".todo-item")

    todoItem.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase()
        if (itemText.indexOf(filterText) != -1) {
            item.setAttribute("style", "display : block;")
        } else {
            item.setAttribute("style", "display : none !important;")
        }
    });

}