const todolist = [];
const completedList = [];
let editIndex = -1;


function renderToDoList(){
    let todoListHTML = '';
    for(let i=0;i<todolist.length;i++){
        const todo = todolist[i];

        if(editIndex === i){
            todoListHTML+= `<p> 
            <input value="${todo}" class="js-editinput"/>

            <button class="js-save-button"
            onclick="saveEdit(${i})">Save</button>

            <button class="js-cancel-button"
            onclick="cancelEdit()">Cancel</button>
            </p>`
        }
        else{

        todoListHTML+= `<p class="js-task-todo">
        <input type="checkbox" onclick="completebutton(${i})"/>
        ${todo} 
        <button onclick="startEdit(${i})" class="js-pen-button"><i class="fa-solid fa-pen js-pen"></i></button>
        <button onclick="todolist.splice(${i},1);
        renderToDoList();" class="js-trash-button">
        <i class="fa-solid fa-trash"></i></button>
        </p>`;
        }
    }
    const scrollableElement = document.querySelector('.js-list').innerHTML = todoListHTML;

    scrollableElement.scrollTop = scrollableElement.scrollHeight;

}

function displayCompleted(){
    let completedHTML  = '';
    for(let i=0;i<completedList.length;i++){
        completedHTML+= `<p class="js-task-completed"><input type="checkbox" checked disabled/>${completedList[i]}</p>`
    }
    const scrollableElement = document.querySelector('.js-list').innerHTML = completedHTML;

    scrollableElement.scrollTop = scrollableElement.scrollHeight;
}

function completebutton(index){
    const completedtask = todolist[index];
    completedList.push(completedtask);
    todolist.splice(index,1);
    renderToDoList();
}

function startEdit(index){
    editIndex = index;
    renderToDoList();
}

function saveEdit(index){
    const input = document.querySelector('.js-editinput');
    const newValue = input.value;

    if(newValue.trim() !== ''){
        todolist[index] = newValue;
    }

    editIndex = -1;
    renderToDoList();
}
function cancelEdit(){
    editIndex = -1;
    renderToDoList();
}


function addTodoList(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    
    todolist.push(name);
    inputElement.value = '';  
    renderToDoList();
}