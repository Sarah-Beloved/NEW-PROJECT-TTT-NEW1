document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let error = document.getElementById("error");


    // Check if passwords match
    if(password !== confirmPassword){
        error.textContent = "Passwords do not match";
        return;
    }

    // Check if user already exists
    if(localStorage.getItem(username)){
        error.textContent = "Username already exists";
        return;
    }

    // Save user to localStorage
    let user = { password: password };
    localStorage.setItem(username, JSON.stringify(user));

    alert("Registration successful! You can now login.");
    window.location.href = "login.html";
});