function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Hello";

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  document.getElementById("greeting").innerText = greeting;
}

function expandBio() {
  const bio = document.getElementById("bio");
  const extraText = document.createElement("p");
  extraText.innerText = "I'm currently studying Web Application Development and learning new technologies every day!";
  bio.appendChild(extraText);
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("form-error");

  if (!name || !email) {
    error.innerText = "Please fill out both fields.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.innerText = "Please enter a valid email address.";
    return false;
  }

  error.innerText = "";
  alert("Thank you for subscribing!");
  return true;
}
