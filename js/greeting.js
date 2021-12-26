const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function handleLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `${username}'s To Do List`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  greeting.classList.add(HIDDEN_CLASSNAME);
  document.getElementById("todo-form").classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {

  paintGreetings(savedUsername);
  document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME);
}