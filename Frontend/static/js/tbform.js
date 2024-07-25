
// JavaScript code remains unchanged
document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const surveyForm = document.getElementById('surveyForm');
    const questionContainer = document.getElementById('questionContainer');
    const endScreen = document.getElementById('endScreen');
    const finalSubmitBtn = document.getElementById('finalSubmitBtn');
    let currentQuestionId = 1; // Initialize currentQuestionId variable
    let questionData = {};

    submitBtn.addEventListener('click', function () {
      // Hide the question section
      questionContainer.classList.add('hide');
      // Show the end screen section
      endScreen.classList.remove('hide');
      // Show the final submit button
      finalSubmitBtn.classList.remove('hide');
      // Hide the initial submit button
      submitBtn.classList.add('hide');
    });
  
    surveyForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      // Hide the question section
      questionContainer.classList.add('hide');
      // Show the end screen section
      endScreen.classList.remove('hide');
      // Show the final submit button
      finalSubmitBtn.classList.remove('hide');
      // Hide the initial submit button
      submitBtn.classList.add('hide');
    });
  
    finalSubmitBtn.addEventListener('click', function () {
      // Submit form data here
      alert('फॉर्म सफळतेने सादर केले गेले!');
    });
  
    nextBtn.addEventListener('click', function () {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      const selectedValue = selectedOption.getAttribute('value');
      if (selectedOption) {
        currentQuestionId = questionData.next_question[selectedValue]; // Update currentQuestionId
        fetchNextQuestion(currentQuestionId, selectedOption);
      } else {
        alert('Please select an answer before proceeding.');
      }
    });
  
    // Function to fetch next question from API
    function fetchNextQuestion(questionId, answer) {
      fetch(`http://127.0.0.1:8000/questions/${questionId}`)
        .then(response => response.json())
        .then(data => {
          questionData = data;
          if (data.id) {
            console.log("Currentquestionid = "+currentQuestionId);
            renderQuestion(data.text, data.options);
          } else {
            // If question or options are empty, render submit button and hide next button
            questionContainer.innerHTML = '';
            submitBtn.classList.remove('hide');
            nextBtn.classList.add('hide'); // Hide next button
          }
        })
        .catch(error => console.error('Error:', error));
    }
  
    // Function to render question dynamically
    function renderQuestion(question, options) {
      const optionsHTML = options.map(option => `
      <label class="answer">
          <span>${option}</span>
          <input type="radio" name="answer" value="${option}">
          <div class="checkbox"><i class="fas fa-check"></i></div>
      </label>
  `).join('');
      questionContainer.innerHTML = `
      <div class="question-wrapper">
          <div class="question">${question}</div>
          <div class="answer-wrapper">
              ${optionsHTML}
          </div>
      </div>
  `;
    }
  
    // Initial rendering of first question
    fetchNextQuestion(currentQuestionId, '');
  
  });
