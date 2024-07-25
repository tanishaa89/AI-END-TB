

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the login form and input fields
    const loginForm = document.querySelector(".sign-in-form");
    const signUpForm = document.querySelector(".sign-up-form");
    const usernameInputSignIn = document.querySelector(".sign-in-form input[type='text']");
    const passwordInputSignIn = document.querySelector(".sign-in-form input[type='password']");
    const usernameInputSignUp = document.querySelector(".sign-up-form input[type='text']");
    const passwordInputSignUp = document.querySelector(".sign-up-form input[type='password']");

    // Add event listener to the login form for form submission
    loginForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the username and password entered by the user
      const username = usernameInputSignIn.value.trim();
      const password = passwordInputSignIn.value.trim();
      
      // Perform any necessary validation checks on the username and password
      
      // Redirect the user to index.html with fade-out effect
      fadeOutAndRedirect();
    });

    // Add event listener to the sign-up form for form submission
    signUpForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the username and password entered by the user
      const username = usernameInputSignUp.value.trim();
      const password = passwordInputSignUp.value.trim();
      
      // Perform any necessary validation checks on the username and password
      
      // Redirect the user to index.html with fade-out effect
      fadeOutAndRedirect();
    });

   // Function to add fade-out effect and redirect to index.html
function fadeOutAndRedirect() {
const container = document.querySelector(".container");
// Add fade-out class to the container
container.classList.add("fade-out");

// After the transition duration, redirect to index.html
const transitionDuration = parseFloat(getComputedStyle(container).transitionDuration) * 1000; // in milliseconds
setTimeout(function() {
    window.location.href = "indexmar.html"; // Redirect after transition duration
}, transitionDuration);
}
})
