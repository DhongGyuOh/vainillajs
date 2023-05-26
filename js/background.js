const images = [
  "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdaPJMD%2FbtqCinzhh9J%2FakDK6BMiG3QKH3XWXwobx1%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHMugo%2FbtqCjdpKuk4%2FNROkorXCgLcXpNCuNPh8qk%2Fimg.jpg",
];
const body = document.querySelector("body");
const selectedImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
//createElement 로 element를 새로 만들 수도 있음 (html에 img 추가한거랑 같음)
bgImage.src = selectedImage;
//img src에 소스 추가한거랑 같음
document.body.appendChild(bgImage);
//위에서 만든 img를 body에 추가함
body.style.backgroundImage =
  "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
