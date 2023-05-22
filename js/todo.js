const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify 를 활용하여 문자열로 바꿔서 localStorage에 저장함
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  //click event가 발생된 button의 부모 li를 받아옴
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  //li,span,button Element를 생성
  span.innerText = newToDo.text;
  button.innerText = "삭제";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  li.id = newToDo.id;
  //속성 값을 넣어준 span과 button을 li의 child에 넣고 li를 toDoList child에 추가해줌
  button.addEventListener("click", deleteToDo);
  //삭제 button 눌렀을때
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  //newToDo를 LocalStorage에 넣음
  paintToDo(newToDoObj);
  saveToDos();
  //LocalStorage를 저장함
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  //saveToDos로 만들어진 문자열을 JSON.parse를 통해 Array형태로 만들어줌
  toDos = parsedToDos;
  //array로 다시 받아온 parsedToDos를 toDos에 넣음
  parsedToDos.forEach((item) => paintToDo(item));
}

// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");
// const TODOS_KEY = "todos";
// let toDos = [];
// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   console.log(li.id);
//   li.remove();
//   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//   saveToDos();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }
// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   const newTodoObj = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObj);
//   paintToDo(newTodoObj);
//   saveToDos();
// }
// toDoForm.addEventListener("submit", handleToDoSubmit);
// const savedToDos = localStorage.getItem(TODOS_KEY);
// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach((item) => paintToDo(item));
// }
