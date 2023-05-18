const clock = document.querySelector("h2#clock");
function sayhello() {
  console.log("hello");
}
function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}.${seconds}`;
}
setInterval(getClock, 1000);
//Interval 함수를 정해진 시간만큼 반복해서 호출하는 메소드
setTimeout(sayhello, 1000);
//정해진 시간뒤에 함수를 1번만 호출함
