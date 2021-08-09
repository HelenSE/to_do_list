//ROOT
const root = document.querySelector('#root');
//DATA
const todos = [
    { title: 'Drink water',
      description: 'You need drink water',
      time: '9:00'
    },
    { title: 'Brekfast',
      description: 'You need eat',
      time: '9:30'
    }
]

//APP
createInput()
render(todos);
function createCard(todo){
    const card = document.createElement ('div');
    const cardTitle = document.createElement ('h1');
    const cardDescription = document.createElement ('p');
    const cardTime = document.createElement ('p');

    card.className = 'flex flex-col w-80 h-60 bg-purple-600 bg-opacity-50 m-auto mt-4 p-2 border-2 rounded-lg text-center font-serif';
    cardTitle.className = 'text-3xl uppercase font-bold';
    cardDescription.className = 'text-xl pt-2 h-full overflow-hidden';
    cardTime.className = 'text-2xl font-normal';

    cardTitle.textContent = todo.title;
    cardDescription.textContent = todo.description;
    cardTime.textContent = todo.time;

    card.append(cardTitle, cardDescription, cardTime);
    root.append(card);
}

function render(model){
    model.forEach(todo=>{
    createCard(todo);
    })
}
function createInput() {
    const inputWindow = document.createElement('div')
    const inputWindowElem = document.createElement('input')
    const inputButton = document.createElement('div')
    const inputButtonElem = document.createElement('button')
    inputButtonElem.textContent = "Add"

    inputWindowElem.className = 'flex flex-col m-auto mt-4 rounded-lg border-2 bg-purple-600 bg-opacity-70'
    inputButtonElem.className = 'flex flex-col m-auto items-center h-6 w-20 bg-pink-300 bg-opacity-70 rounded-l-lg font-serif'

    inputWindow.append(inputWindowElem)
    root.append(inputWindow)
    inputButton.append(inputButtonElem)
    root.append(inputButton)
}
