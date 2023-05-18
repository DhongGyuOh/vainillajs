const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify 를 활용하여 문자열로 바꿈
}
function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text + newToDo.id;
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
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

if (saveToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  //saveToDos로 만들어진 문자열을 JSON.parse를 통해 Array형태로 만들어줌
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
