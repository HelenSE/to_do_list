export const model = {
    data: [],
    get: function(){
        if(localStorage.length){
            model.data= JSON.parse(localStorage.getItem('todos'))
        }
        model.data = []   
    },
    set: function(value){
        model.data.push(value)
        localStorage.getItem('todos', JSON.stringify(model.data))
    }
}

export let todos = [
    {
        title: 'Drink',
        text: 'I need to drink',
        time: '9:00',
        isDone: true,
        id: '0'
    },

    {
        title: 'Eat',
        text: 'I need to eat',
        time: '13:00',
        isDone: false,
        id: '1'
    }
]

