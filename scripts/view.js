// VIEW====================================================>
import { header, todoList } from "./templates.js"
import { controller } from "./controller.js"

function initListeners(){
    // btn add todo
    document.getElementById('add-todo').addEventListener('click', controller.addTodo)
    // btn delete last task
    document.getElementById('delete-last-todo').addEventListener('click', controller.deleteLastTodo)
    // btn delete all
    document.getElementById('delete-all-todos').addEventListener('click', controller.deleteAllTodos)
}

function printApp(){
    root.insertAdjacentHTML('afterbegin', header())
    root.insertAdjacentHTML('beforeend', todoList())
}

export { initListeners, printApp }