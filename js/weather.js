const API_KEY = "517ab1e652c6b0b78aae3801ea0c5277";
function onGeoOk(geolocationPosition) {
  const lat = geolocationPosition.coords.latitude;
  const lon = geolocationPosition.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=517ab1e652c6b0b78aae3801ea0c5277`;
  console.log(`${url}`);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No Weather For You");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//WiFi, 위치, GPS좌표 등 받아오는 코드
