let inputName = prompt("enter your name");
let inputEmail = prompt("enter your email");

if (inputName && inputEmail) {
    
    let usersList = JSON.parse(localStorage.getItem("users")) || [];
    let newUser = { name: inputName, email: inputEmail };
    usersList.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersList));
}

let container = document.getElementById("usersContainer");
let usersList = JSON.parse(localStorage.getItem("users")) || [];

usersList.forEach(user => {
    let userDiv = document.createElement("div");
    userDiv.style.marginBottom = "10px";
    userDiv.innerHTML = `<strong>name</strong> ${user.name} <br> <strong>email</strong> ${user.email} <hr>`;
    container.appendChild(userDiv);
});