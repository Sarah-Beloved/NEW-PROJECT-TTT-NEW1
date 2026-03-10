document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("regUsername").value;
let email = document.getElementById("regEmail").value;
let password = document.getElementById("regPassword").value;

let user = {
username: username,
email: email,
password: password
};

localStorage.setItem(username, JSON.stringify(user));

alert("Registration Successful");

window.location.href = "login.html";

});