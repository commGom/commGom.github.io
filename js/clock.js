const clock = document.querySelector("#clock");
console.log(new Date());

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  // console.log(`${hour}:${minute}:${second}`);
  clock.innerText = `${hour}:${minute}:${second}`;
}
setTimeout(getClock, 0);
setInterval(getClock, 1000);