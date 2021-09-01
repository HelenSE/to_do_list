// TEMPLATES====================================================>
function header(todos){
  let completed = todos.filter(function(item) {
    return item.isDone;
  }).length;
  let inProgress = todos.length-completed;
  return `
  <header id="header" class="header">
<div class="header__content">
  <h1 class="header__title">Todo List</h1>
  <div class="header__description">
       <p class='header__text'>${completed} - is completed</p>
       <p class='header__text'>${inProgress} - in progress</p>
    </div>
</div>
<div class="header__buttons">
  <button id="add" class='header__button'>Add</button>
  <button id="delete-last-todo" class='header__button'>Delete last</button>
  <button id="delete-all-todos" class='header__button'>Delete all</button>
</div>
</header>
  `
}

function modal(){
  return`
  <div class="fixed z-10 inset-0 overflow-y-auto pt-28 hidden" id="modal">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mt-90">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity"><span class="hidden sm:inline-block sm:align-middle sm:h-screen"> </span>
      <div class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="modal px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
              <h3 class="text-xl leading-6 font-medium text-white">Add todo</h3>
              <div class="mt-2">
                <div class="mt-7">
                  <input class="modal__input" type="text" id="inputTitle" placeholder="Enter title">
                  <input class="modal__input" type="text" id="inputText" placeholder="Enter text">
                </div>
              </div>
            </div>
          </div>
          <div class="modal__buttons">
            <button class="header__button mr-7" id="addButton">Add</button>
            <button class="header__button mr-7" id="cancelButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}

function todoList(){
  return `
      <div id="todo-list" class="todo-list"></div>
  `
}


function card(todo, id) {
return `
<div class="card">
<div class="card__mark"> </div>
<div class="card__content">
<label class="label">
         <input type="checkbox" class="card__checkbox" ${todo.isDone?"checked":""} id="checkbox-${id}">
         <div class="checkbox__text"></div>
      </label>
<h2 class="card__header"> ${todo.title} </h2>
  <p class="card__time"> ${todo.time} </p>
  <p class="card__text"> ${todo.text} </p>
  <button class="card__button" id="delete-button-${id}"> Delete
 </button>
  </div>
</div>
`
}


export {header, todoList, modal, card}