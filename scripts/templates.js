function header(){
  return `<div><h1 class="flex flex-col items-center mb-3 font-bold text-6xl font-serif text-indigo-800 text-opacity-75">todos</h1></div>
  <div><button class="flex flex-col m-auto items-center h-6 w-40 bg-pink-300 bg-opacity-70 rounded-l-lg font-serif text-base font-medium text-black">Add new task</button></div>`
}

function creatCard(obj) {
const card = document.createElement('div');
const cardTitle = document.createElement('h2');
const cardText = document.createElement('p');
const cardTime = document.createElement('p');
const cardBtnContainer = document.createElement('div');
const cardBtnDone = document.createElement('a');
const cardBtnDelete = document.createElement('a');

card.classList = 'flex flex-col w-80 h-60 bg-purple-600 bg-opacity-50 m-auto mt-4 p-2 border-2 rounded-lg text-center font-serif';
cardBtnDone.classList = 'inline-flex justify-center rounded-md border border-transparent h-20 w-40 shadow-sm h-10 w-40 px-4 py-2 mb-2 mx-20  bg-blue-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
cardBtnDelete.classList = 'inline-flex justify-center rounded-md border border-transparent shadow-sm h-10 w-40 px-4 py-2 mb-2 mx-20  bg-blue-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
  
card.id = `${obj.id}`

cardTitle.classList = 'text-lg leading-6 font-medium text-gray-900 mt-5 text-2xl ml-6' 
cardBtnContainer.classList = 'my-5'
cardText.classList = 'mt-2 text-lg ml-6'
cardTime.classList = 'mt-2 text-lg ml-6'

cardTitle.textContent = obj.title;
cardText.textContent = obj.text;
cardTime.textContent = obj.time;
cardBtnDone.textContent = 'Done';
cardBtnDelete.textContent = 'Delete';

card.append(cardTitle, cardText, cardTime, cardBtnContainer, cardBtnDone, cardBtnDelete);
root.append(card);
}

function card(obj) {
return `
<div class="flex flex-col w-80 h-60 bg-purple-600 bg-opacity-50 m-auto mt-4 p-2 border-2 rounded-lg text-center font-serif" id='${obj.id}'>
  <h2 class="text-lg leading-6 font-medium text-gray-900 mt-5 text-2xl ml-3">${obj.title}</h2>
  <p class="mt-2 text-lg ml-6">${obj.text}</p>
  <p class="mt-2 text-lg ml-6">${obj.time}</p>
  <div class="my-2"></div>
  <a class="inline-flex justify-center rounded-md border border-transparent shadow-sm h-10 w-40 px-4 py-2 mb-2 mx-20 bg-blue-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Done</a>
  <a class="inline-flex justify-center rounded-md border border-transparent shadow-sm h-10 w-40 px-4 py-2 mb-2 mx-20  bg-blue-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Delete</a>
</div>`
}

function modal(){
    return `<div id= 'modal_window' class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" hidden>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Deactivate account
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Deactivate
            </button>
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>`
}

export {header, modal, card, creatCard};
