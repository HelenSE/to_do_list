import { model } from "./model.js"
import { initListeners, printApp } from "./view.js"

// ROOT====================================================>
const root = document.getElementById('root')

// APP====================================================>

function app(){
    model.getLocalStorage()
    printApp()
    initListeners()
}

app()
