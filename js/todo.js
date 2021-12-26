const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
//toDo를 저장할 배열
let toDos = [];

//localStorage에 데이터 저장하는 함수
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//delete 수행하는 function
function deleteTodo(event) {
    console.log("delete working");
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id != li.id);
    saveTodos();
}

//목록에 출력시켜준다.
function paintTodo(newTodoObj) {
    const newTodo = newTodoObj.text;
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodo;
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(delBtn);

    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(`TodoInput : ${todoInput.value}`);
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = { text: newTodo, id: Date.now() }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach((item) => { paintTodo(item) });
}