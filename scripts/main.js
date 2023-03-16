"use strict";

// ASSIGNING BUTTONS
const signInBtn = document.querySelector(".sign__in-btn");
const signUpBtn = document.querySelector(".sign__up-btn");
const signInForm = document.querySelector("#sign-in-form");

// CREATING USER PROFILE (IN LOCAL STORAGE).
let arr = localStorage.getItem("userData");

if (!arr) {
  let userData = [];
  localStorage.setItem("userData", JSON.stringify(userData));
}

function submitAction(e) {
  e.preventDefault();

  const userName = document.querySelector("#username").value;

  const userEmail = document.querySelector("#email").value;

  const userNumber = document.querySelector("#tel").value;

  const userPassword = document.querySelector("#password").value;

  let newUserData = {
    userName,
    userEmail,
    userNumber,
    userPassword,
  };

  let userArr = JSON.parse(localStorage.getItem("userData"));
  userArr.push(newUserData);

  localStorage.setItem("userData", JSON.stringify(userArr));
  window.location.href = "index.html";
}

// signUpBtn.addEventListener("click", submitAction);

// Revealing Section on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  // unobserving
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});
