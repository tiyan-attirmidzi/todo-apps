// UI Elements
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoFilterInput = document.querySelector("#filter-input")
const todoList = document.querySelector("#todo-list")
const todoClearButton = document.querySelector("#clear-todos")

todoForm.addEventListener("submit", addTodo)

/*
    preventDefault() is a method that prevents the occurrence of a built-in DOM event, 
    for example the "a href" tag if we click, the browser page will reload, 
    or a form if we click the submit button it will also reload.
*/

function addTodo(e) {
    e.preventDefault()
    let title = document.createTextNode("Title Todo List")
    const li = document.createElement("li")
    const a = document.createElement("a")
    // li element
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"
    li.appendChild(title)
    // a element
    a.href = "#"
    a.className = "badge badge-danger"
    a.innerHTML = "Delete"
    // inserts a element into li children
    li.appendChild(a)

    console.log(li)
}