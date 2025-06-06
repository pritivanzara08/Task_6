document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual submission

  //clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  //Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Valid email is required";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
  }
});