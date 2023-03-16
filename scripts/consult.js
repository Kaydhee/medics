"use strict";

// Displaying the name of the logged in user on consult page
let consultEl = document.querySelector("#consult-h1");
console.log(consultEl);

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
console.log(loggedInUser);

consultEl.textContent = `Welcome ${loggedInUser.userName}`;

// For hiding and displaying forms/output
const bookingsForm = document.querySelector(".bookings__form");
// console.log(bookingsForm);
const bookings = document.querySelector(".bookings__output");
// console.log(bookings);
// BOOKINGS SECTION
function submitDisplay(e) {
  e.preventDefault();
  // getting form entries
  const bookName = document.querySelector("#name").value;
  const emailName = document.querySelector("#email").value;
  const dateName = document.querySelector("#date").value;
  const timeName = document.querySelector("#time").value;
  const packageName = document.querySelector("#packages").value;

  // bookings output
  let nameOutput = document.querySelector("#name-output");
  let emailOutput = document.querySelector("#email-output");
  let dateOutput = document.querySelector("#date-output");
  let timeOutput = document.querySelector("#time-output");
  let packageOutput = document.querySelector("#package-output");

  // Re-assigning the variables
  nameOutput.textContent = `Name: ${bookName}`;
  emailOutput.textContent = `Email: ${emailName}`;
  dateOutput.textContent = `Date: ${dateName}`;
  timeOutput.textContent = `Preferred Time: ${timeName}`;
  packageOutput.textContent = `Reason: ${packageName}`;

  // For hiding and displaying forms/output
  bookings.classList.remove("hidden");
  bookingsForm.style.display = "none";
}

const bookingsBtn = document.querySelector("#bookings-btn");

bookingsBtn.addEventListener("click", submitDisplay);

const confirmSubmit = function () {
  bookings.classList.add("hidden");
  bookingsForm.style.display = "flex";
};

const outputBtn = document.querySelector("#output-btn");

outputBtn.addEventListener("click", confirmSubmit);
