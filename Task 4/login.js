"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let userdata = localStorage.getItem("userdata");
    userdata = userdata ? JSON.parse(userdata) : [];

    let loginSuccess = false;
    let currentUser = "";

    for (let i = 0; i < userdata.length; i++) {
      if (
        userdata[i].username === userName &&
        userdata[i].password === password
      ) {
        loginSuccess = true;
        currentUser = userdata[i].username;
        break;
      }
    }

    if (loginSuccess) {
      console.log("Login success");

      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      console.log("Login failed");
      // Show an error message to the user
    }
  });
});

etTimeout(function () {
  const user = document.querySelector(".username");
  //   console.log(user);
  user.innerHTML = `Welcome ${currentUser}`;
  console.log(user);
}, 200);
