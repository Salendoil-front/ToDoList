const saveButtonJob = document.querySelector('button.save-job')
const clearButtonJob = document.querySelector('button.clear-job')
const todos = document.querySelector('#todos-id')
const todoText = document.getElementById('todo-text')
todos.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI' || ev.target.tagName === "P") {
        todoText.classList.toggle('checked')
    }
    else if (ev.target.tagName == 'I') {
        let deleteLi = ev.target.parentNode.parentNode
        deleteLi.remove()
    }
    else if (ev.target.tagName == 'SPAN') {
        ev.target.parentNode.parentNode.classList.toggle('active')
    }
}, false)

function newTodos() {
    let inputValue = document.querySelector('input').value;
    const limitSymbol = document.querySelector('input').value.split(' ')
    console.log(limitSymbol)
    const li = document.createElement('li')
    li.classList.add('list-text')
    const p = document.createElement('p')
    p.classList.add('todo-text')
    p.append(inputValue)
    const span = document.createElement('span')
    span.classList.add('todo-delete')
    const redAndBold = document.createElement('span')
    redAndBold.classList.add('redAndBold')
    redAndBold.innerText = '!'
    const icon = document.createElement('i')
    icon.classList.add('fas', 'fa-trash-alt')
    span.append(redAndBold, icon)
    li.append(p, span)
    if (inputValue == '' || inputValue == ' ' || inputValue == '  ') {
        alert('Введите ваше дело!!!')
    }
    else if (inputValue !== '') {
        for (let i = 0; i < limitSymbol.length; i++) {
            if (limitSymbol[i].length > 30) {
                alert('слишком большое слово, страница будет перезагружена')
                document.querySelector('input').value = '';
            }
            else {
                todos.append(li)
                document.querySelector('input').value = '';
                li.classList.add('hidden')
                setTimeout(() => {
                    console.log('class Toggle')
                    li.classList.remove('hidden')
                }, 500)
                setTimeout(() => {
                    console.log('save changes')
                    localStorage.setItem('todosKeyJob', todos.innerHTML)
                }, 600)
            }
        }
    }
}
const input = document.querySelector("input")
input.addEventListener('keypress', (keyPressed) => {
    if (keyPressed.which == 13) {
        setTimeout(() => {
            newTodos()
        }, 0)
    }
})
const btnSend = document.getElementById('responseDos')
btnSend.addEventListener('click', newTodos, false)
    //saveButton.addEventListener('click', () => {
    //    localStorage.setItem('todosKey', todos.innerHTML)
    //})
    //
    //clearButton.addEventListener('click', () => {
    //    localStorage.removeItem('todosKey', todos.innerHTML)
    //    location.reload()
    //})
saveButtonJob.addEventListener('click', () => {
    localStorage.setItem('todosKeyJob', todos.innerHTML)
})
clearButtonJob.addEventListener('click', () => {
        localStorage.removeItem('todosKeyJob', todos.innerHTML)
        location.reload()
    })
    //saveButtonRelax.addEventListener('click', () => {
    //    localStorage.setItem('todosKeyRelax', todos.innerHTML)
    //})
    //
    //clearButtonRelax.addEventListener('click', () => {
    //    localStorage.removeItem('todosKeyRelax', todos.innerHTML)
    //    location.reload()
    //})
document.addEventListener('DOMContentLoaded', function () {
    const data = localStorage.getItem('todosKeyJob')
    if (data) {
        todos.innerHTML = data
    }
})
