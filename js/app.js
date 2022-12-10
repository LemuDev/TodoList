window.addEventListener("DOMContentLoaded", ()=>{
    let todoList = []

    let form = document.getElementById("form")
    let inputName = document.getElementById("name")
    let todoContainer = document.getElementById("todo-container")


    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        todoList.push(inputName.value)
        inputName.value= ""
   
        if(todoList.length === 0){
            return;
        }else{
            let div = document.createElement("div")

            for (let i = 0; i < todoList.length; i++) {
                div.innerHTML += /* html*/ `
                    <p class="alert alert-warning">${ todoList[i] }</p>
                `
            }

            todoContainer.innerHTML = `
                <h3>Todo List</h3>
                <hr>
            `
            todoContainer.appendChild(div)
        }


    })

})