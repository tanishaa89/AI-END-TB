$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});


//dashboard

// script.js - Placeholder JavaScript for dynamic data loading
// In a real application, this script would fetch data from an API

// Example data
const upcomingAppointments = [
    "Appointment 1 - 10:00 AM",
    "Appointment 2 - 2:00 PM",
    "Appointment 3 - 4:30 PM"
  ];
  
  const recentPatientInteractions = [
    "Patient 1 - Follow-up visit",
    "Patient 2 - New diagnosis",
    "Patient 3 - Treatment adherence check"
  ];
  
  // Update upcoming appointments
  const appointmentsList = document.getElementById("appointments");
  appointmentsList.innerHTML = "";
  upcomingAppointments.forEach(appointment => {
    const listItem = document.createElement("li");
    listItem.textContent = appointment;
    appointmentsList.appendChild(listItem);
  });
  
  // Update recent patient interactions
  const patientInteractionsList = document.getElementById("patient-interactions");
  patientInteractionsList.innerHTML = "";
  recentPatientInteractions.forEach(interaction => {
    const listItem = document.createElement("li");
    listItem.textContent = interaction;
    patientInteractionsList.appendChild(listItem);
  });

  

