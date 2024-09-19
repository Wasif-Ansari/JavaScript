let TodoList = JSON.parse(localStorage.getItem("TodoList"));
displayitems()
localStorage.setItem("TodoList", JSON.stringify(TodoList));

function addtodo(){
    let Todo = document.querySelector('#todo-input')
    let TodoDate = document.querySelector('#todo-date')
    Task = Todo.value;
    Deadline = TodoDate.value
    console.log(Deadline)

    if(!Boolean(Task)){
        Todo.value = ""
        displayitems()
    }else{
    TodoList.push({task:Task, timing:Deadline});
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
    // console.log(TodoList)
    Todo.value = ""
    TodoDate.value = ""

    displayitems()}
}

function displayitems(){
    let TodoList = JSON.parse(localStorage.getItem("TodoList"));

    let Container = document.querySelector('.todo-container');
    let newHTML = '';

    for(let i=TodoList.length-1; i>=0; i--){
        newHTML+= `
        <span>
        ${TodoList[i].task}
        </span>
        <span>
        ${TodoList[i].timing}
        </span>
        <button id="Del-button" onclick="
        TodoList.splice(${i}, 1);
        displayitems()
         ">DELETE
        </button>`
    }
    Container.innerHTML = newHTML;
}