"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.getElementById("signup");

  signupButton.addEventListener("click", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const userName = document.getElementById("username").value;
    const phoneNumber = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    const new_user = {
      name: fullName,
      username: userName,
      phone: phoneNumber,
      password: password,
    };

    let userdata = localStorage.getItem("userdata");
    userdata = userdata ? JSON.parse(userdata) : [];
    userdata.push(new_user);
    localStorage.setItem("userdata", JSON.stringify(userdata));

    window.location.href = "login.html";
  });
});
