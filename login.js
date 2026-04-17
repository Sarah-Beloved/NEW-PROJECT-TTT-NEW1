document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

/* ADMIN LOGIN */

if(username === "admin" && password === "1234"){
window.location.href = "products.html";
return;

}

/* USER LOGIN */

let storedUser = localStorage.getItem(username);

if(storedUser){
    let userData = JSON.parse(storedUser);

if(userData.password === password){
    window.location.href = "products.html";
}else{
document.getElementById("error").textContent = "Wrong Password";
}
}else{
document.getElementById("error").textContent = "User does not exist";
}

});