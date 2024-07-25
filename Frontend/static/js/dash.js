
function searchPatients() {
  var input, filter, cards, card, patientName, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    card = cards[i];
    patientName = card.getElementsByTagName("h4")[0];
    txtValue = patientName.textContent || patientName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

function performTbScreening() {
  // रुग्णासाठी TB स्क्रीनिंग आरंभित केली जाते.
  alert("रुग्णासाठी TB स्क्रीनिंग आरंभित केली जाते.");
  window.location.href = "tbformmar.html";
}

function addPatient() {
  // नवीन रुग्ण जोडताना...
  alert("नवीन रुग्ण जोडताना...");
  window.location.href = "patientformmar.html";
}


function viewDetails(patientName, age, gender) {
  // Redirect to patient_details.html with patient details as URL parameters
  window.location.href = "patient_detailsmar.html?patient=" + encodeURIComponent(patientName) + "&age=" + encodeURIComponent(age) + "&gender=" + encodeURIComponent(gender) ;
}
function viewSurveyForms(patientName,age,gender) {
  // Redirect to patient_details.html with patient name
  window.location.href = "patient_detailsmar.html?patient=" + encodeURIComponent(patientName) + "&age=" + encodeURIComponent(age) + "&gender=" + encodeURIComponent(gender) ;
}
