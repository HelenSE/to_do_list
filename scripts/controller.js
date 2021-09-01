// CONTROLLER====================================================>

import { model } from "./model"

export const controller = {
    deleteTodo: function(){
        model.setLocalStorage()
        view.render()
    },
    completeTodo: function(){
        // 
    },
    addTodo: function(){
        model.setLocalStorage()
        view.render()
    },
    deleteAllTodos: function(){
        model.setLocalStorage()
        view.render()
    },
    deleteLastTodo: function(){
        model.setLocalStorage()
        view.render()
    },
    openModal: function(){

    },
    closeModal: function(){

    }
}
