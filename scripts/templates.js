// TEMPLATES====================================================>

function header(){
    return `
    <header id="header" class="bg-yellow-100 p-5" >
        <h1>Todo List: <strong id="todo-counter">${1}</strong></h1>
        <div>
            <p>Completed task: <strong id="copmleted-counter">${2}</strong></p>
            <p>In progress: <strong id='progress-counter'>${3}</strong></p>
        </div>
        <div>
            <button id="add-todo" class='border-2 bg-green-500 p-3'>Add</button>
            <button id="delete-last-todo" class='border-2 bg-green-500 p-3'>Delete last task</button>
            <button id="delete-all-todos" class='border-2 bg-green-500 p-3'>Delete all</button>
        </div>
    </header>
    `
}

function todoList(){
    return `
        <div id="todo-list"></div>
    `
}

export {header, todoList}