
    // Function to retrieve URL parameters
    function getURLParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Function to display patient details dynamically
    function displayPatientDetails() {
      const patientName = getURLParameter('patient');
      const age = getURLParameter('age');
      const gender = getURLParameter('gender');
      const address = getURLParameter('address');
      const phone = getURLParameter('phone');
      const email = getURLParameter('email');

      // Display patient details in the card dynamically
      const patientCard = document.getElementById("patientCard");
      patientCard.innerHTML = `
        <h4>${patientName}</h4>
        <p>वय: ${age}</p> <!-- Age translated to Marathi -->
        <p>लिंग: ${gender}</p> <!-- Gender translated to Marathi -->
        <!-- Add more details as needed -->
      `;
    }
    function performTbScreening() {
        // Add your code to handle TB screening for the patient here
        alert("रुग्णासाठी टीबी स्क्रीनिंग सुरू केली जाते."); // Translation of the alert message
        window.location.href = "tbformmar.html";
      }
      function performForm2() {
        window.location.href = "form2.html";
      }
      function performForm3() {
        window.location.href = "form3.html";
      }
      function performForm4() {
        window.location.href = "form4.html";
      }
      function performForm5() {
        window.location.href = "form5.html";
      }

    // Call the function to display patient details when the page loads
    window.onload = displayPatientDetails;
  