document.addEventListener("DOMContentLoaded", () => {
    const auth = localStorage.getItem("auth");

    if (auth === "true") {
        showUserUI();
    }
});

function showUserUI() {
    const user = JSON.parse(localStorage.getItem("user"));
    const block = document.getElementById("authButtons");

    block.innerHTML = `
        <span class="text-light me-3">
        My Profile
        </span>
        <button class="btn btn-outline-light" onclick="logout()">Logout</button>
    `;
}

function logout() {
    localStorage.removeItem("auth");
    location.reload();
}