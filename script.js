document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const feedback = document.getElementById("form-message");

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "red";
  } else if (!email.value.includes("@")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you for your message!";
    feedback.style.color = "green";
    // Optionally clear the form
    name.value = "";
    email.value = "";
    message.value = "";
  }
});