const title = document.querySelector(".main__title h1");
console.dir(title);

function handleTitle() {
  title.style.color = "blue";
  title.innerText = "OK";
}

function handleTitle2() {
  title.style.color = "red";
  title.innerText = "Are you sure?";
}
function handleTitle3() {
  title.style.color = "black";
  title.innerText = "Click Me!";
}
function handleResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleCopy() {
  alert("don't do that");
}
title.addEventListener("mouseleave", handleTitle3);
title.addEventListener("mouseenter", handleTitle2);
title.onclick = handleTitle;
window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
