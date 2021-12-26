const API_KEY = "ddf0d3ef1f5e4697e9f121812de1ae9d";



function onGeoOk(postion) {
  console.log(postion);
  const lat = postion.coords.latitude;
  const lng = postion.coords.longitude;
  console.log(`you live in ${lat},${lng}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);