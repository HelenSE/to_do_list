import { model } from "./model.js";
import { view } from "./view.js";

// ROOT====================================================>
export const root = document.getElementById('root');

// APP====================================================>

function app(){
    model.getLocalStorage();
    view.printApp(root);
}

app();