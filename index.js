let loginCredentials = localStorage.getItem("loginStatus");
if (loginCredentials == "false" || loginCredentials == null) {

} else {
    location.assign("./orders.html");
}

var userName = document.querySelector(".username");
var userPassword = document.querySelector(".password");
let submitBtn = document.getElementById("submit");
let form = $("#login-form");
form.submit(function (e) {
    e.preventDefault();

    const user = userName.value;
    const pwd = userPassword.value;
    var mObj = {
        username:"yogesh",
        password:"yogesh",
    };
    if (user === "yogesh" && pwd === 'yogesh') {
        alert("Login Successful");
        localStorage.setItem("loginStatus", JSON.stringify(mObj));
        location.assign("./orders.html");
    }
    else {
        alert("Please Enter valid credentials!");
    }
})

document.getElementById("sign-out").style.display = "none";