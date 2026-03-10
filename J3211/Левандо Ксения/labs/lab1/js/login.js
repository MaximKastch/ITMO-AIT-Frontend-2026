document.addEventListener("DOMContentLoaded", () => {
    // if auth as organizer - cannot auth as user 
    if (localStorage.getItem("organizerAuth") === "true") {
        alert("You are already logged in as an organizer. Please logout first.");
        window.location.href = "organizer-dashboard.html";
    }

    // if auth as user - redirect to dasboard
    if (localStorage.getItem("auth") === "true") {
        window.location.href = "dashboard.html";
    }

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // load all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // find user
    const foundUser = users.find(user => user.email === email);

    if (!foundUser) {
        alert("User not found");
        return;
    }

    if (password === foundUser.password) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("auth", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong email or password");
    }
});
});