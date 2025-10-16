// Hamburger menu toggle
document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Contact form validation
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let valid = true;

  // Name validation
  if (nameInput.value.trim().length < 2 || /\d/.test(nameInput.value)) {
    showError("nameError", "Please enter a valid name.");
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    showError("emailError", "Please enter a valid email address.");
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    showError("messageError", "Message must be at least 10 characters long.");
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    successMessage.textContent = "Your message was sent successfully — thank you!";
    successMessage.classList.add("show-success");
    form.reset();

    setTimeout(() => {
      successMessage.classList.remove("show-success");
    }, 4000);
  }
});

// Show error function
function showError(id, message) {
  const error = document.getElementById(id);
  error.textContent = message;
  error.style.display = "block";
}

// Clear previous errors
function clearErrors() {
  document.querySelectorAll(".error-message").forEach((err) => {
    err.textContent = "";
    err.style.display = "none";
  });
}
