const input = document.getElementById("input")


const createButton =document.getElementById("create_button")

const todoList = document.getElementById("todo_list")

const createTodo = () => {
    if(!input.value.trim()) return alert('Введите что нибудь')
    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')
    const h3 = document.createElement("h3")
    h3.innerHTML = input.value
    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("class", "delete_button")
    const edit = document.createElement("button")
    edit.setAttribute("class", "edit_button")
    deleteButton.innerHTML = 'delete'
    edit.innerHTML = "edit"

    deleteButton.onclick = () => {
        todoList.removeChild(div)
    }
    edit.onclick = () =>{
        const  text = prompt('Измените текст')
        if(text){
            h3.innerHTML = text
        }

    }


    todoList.append(div)
    div.append(h3)
    div.append(edit)
    div.append(deleteButton)

    input.value = ''

}
createButton.onclick = () => createTodo()