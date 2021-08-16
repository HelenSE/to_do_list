import { model } from './model.js';
import {todos} from "./model.js";
import {header, card, creatCard, modal} from './templates.js'

export const view = {
    init: function(){
        root.insertAdjacentHTML('beforeend', modal())
        root.insertAdjacentHTML('afterbegin', header())
    },
    openModal: function(modal){
        modal.classList.remove('hidden')
    },
    closeModal: function(modal){
        modal.classList.add('hidden')
    },
    render: function(root){
        for(let obj of todos){
            root.insertAdjacentHTML('beforeend', card(obj));
        }
    }
} 