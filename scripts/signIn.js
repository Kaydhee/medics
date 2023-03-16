"use strict";

// IMPLEMENTING LOGIN
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = JSON.parse(localStorage.getItem("userData"));
  const checkPassword = document.querySelector("#password").value;
  const checkName = document.querySelector("#username").value;
  function checkAction(user) {
    if (checkName === user.userName && checkPassword === user.userPassword) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return user;
    }

    window.location.href = "loggedIn.html";
  }

  const findUser = userData.find(checkAction);
  if (!findUser) {
    alert("Either your password or username is Incorrect");
    window.location.href = "signin.html";
  }
  // console.log(findUser);
});

// Consult Page
let consultEl = document.querySelector("#consult-h1");
console.log(consultEl);

const loggedInUser = JSON.parse(localStorage.getItem(loggedInUser.userName));

consultEl.textContent = `Welcome`;
