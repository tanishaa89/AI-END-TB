
    const formContainer = document.getElementById("formContainer");
    const registrationForm = document.getElementById("registrationForm");
    const nextButton = document.getElementById("nextButton");

    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Add fade-out class to form container
      formContainer.classList.add("fade-out");

      // After a short delay, redirect to form.html
      setTimeout(function() {
        window.location.href = "form.html";
      }, 700); // Adjust the delay time as needed
    });
