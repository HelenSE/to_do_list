//Imports
import {header, modal, card, creatCard} from "./templates.js";
import {view} from "./view.js"
import {model, todos} from "./model.js"
import {controller} from "./controller.js"

//DOM Elements
const root = document.querySelector ('#root');
let modal_window = document.querySelector ('#modal_window');

//APP
function app() {
    view.init(root)
    model.get()
    view.render(root)  
}
app()


