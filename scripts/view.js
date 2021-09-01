// VIEW====================================================>
import { header, todoList, modal, card } from "./templates.js"
import { controller } from "./controller.js";
import { model } from "./model.js";
import {root} from "./index.js";

export const view = {
    initListeners : function (modal){
        // btn add 
        document.getElementById('add').addEventListener('click',()=>view.openModal(modal));
        // btn delete all
        document.getElementById('delete-all-todos').addEventListener('click', ()=>controller.deleteAllTodos());
        // btn delete last
        document.getElementById('delete-last-todo').addEventListener('click', ()=>controller.deleteLastTodo());
        //delete btn and checked for cards
        for(let i = 0; i < model.todos.length; i++) {
            document.getElementById(`delete-button-${i}`).addEventListener('click', ()=>controller.deleteTodo(i));
            document.getElementById(`checkbox-${i}`).addEventListener('change', ()=>controller.completeTodo(i));
        }
    },

    initModalListeners : function(modal) {
        //add button modal
        document.getElementById('addButton').addEventListener('click',()=>controller.addTodo(modal));
        //cancel button modal
        document.getElementById('cancelButton').addEventListener('click', ()=>controller.cancelAddTodo(modal));
    },

    printApp : function (root){
        root.insertAdjacentHTML('afterbegin', header(model.todos));
        root.insertAdjacentHTML('beforeend', todoList());
        root.insertAdjacentHTML('beforeend', modal());
        for(let i = 0; i < model.todos.length; i++) {
            document.getElementById(`todo-list`).insertAdjacentHTML('afterbegin', card(model.todos[i],i));
        }
        view.initListeners(document.getElementById("modal"));
        view.initModalListeners(document.getElementById("modal"));
    },

    openModal: function(modal){
        modal.classList.remove('hidden');
    },
    closeModal: function(modal){
        modal.classList.add('hidden');
    },

    render : function(){
        //render header
        document.getElementById('header').remove();
        root.insertAdjacentHTML('afterbegin', header(model.todos));
        //render todo-list
        document.getElementById('todo-list').remove();
        root.insertAdjacentHTML('beforeend', todoList());
        for(let i = 0; i < model.todos.length; i++) {
            document.getElementById('todo-list').insertAdjacentHTML('afterbegin', card(model.todos[i],i));
        }
        view.initListeners(document.getElementById("modal"));
    }
}