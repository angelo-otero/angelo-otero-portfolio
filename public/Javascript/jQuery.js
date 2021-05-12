//jshint esversion:6

$(document).ready(() => {
  // selectors for nav links
  const homeButton = $('#home-btn');
  const aboutMeButton = $('#about-me-btn');
  const myWorkButton = $('#my-work-btn');
  const contactMeButton = $('#contact-me-btn');
  const chevronButton = $('#chevron-btn');
  const logo = $('.logo');
  //selectors for animation triggers
  const aboutMe = document.getElementById('about-me');
  const mySkills = document.getElementById('skill-header');
  const firstWork = document.getElementById('first-work');
  const secondWork = document.getElementById('second-work');

  // scrolls down to proper section based on nav link clicked
  homeButton.click(function() {
    $('html, body').animate({
    scrollTop: 0}, 1000);
  });

  aboutMeButton.click(function(){
    $('html, body').animate({
      scrollTop: $('#about-me').offset().top
    }, 1000);
  });

  chevronButton.click(function(){
    $('html, body').animate({
      scrollTop: $('#about-me').offset().top
    }, 1000);
  });

  chevronButton.on('mouseenter', function(){
    chevronButton.css({
      'color': '#98ccd3',
      'cursor': 'pointer',
    });
  }).on('mouseleave', function(){
    chevronButton.css({
      'color': '#ebf0f6',
      'cursor': 'default'
    });
  });

  myWorkButton.click(function(){
    $('html, body').animate({
      scrollTop: $('#my-work').offset().top
    }, 1000);
  });

  contactMeButton.click(function(){
    $('html, body').animate({
      scrollTop: $('#contact-me').offset().top
    }, 1000);
  });

  logo.click(function(){
    $('html, body').animate({
    scrollTop: 0}, 1000);
  });

  $('.fa-bars').click(function(){
    $(this).toggleClass('rotated');
  });

    // //animation for my skills
    // if(mySkills.getBoundingClientRect().top < window.innerHeight){
    //   $('.front-end').addClass('animated zoomIn fast delay-1s');
    //   $('.back-end').addClass('animated zoomIn fast delay-2s');
    //   $('.software').addClass('animated zoomIn fast delay-3s');
    // }
    //
    // //animation for my works
    // if(firstWork.getBoundingClientRect().top < window.innerHeight){
    //   $('.filipino-groups-img').addClass('animated zoomIn slow delay-1s');
    //   $('.filipino-groups').addClass('animated slideInLeft slow');
    // }
    // if(secondWork.getBoundingClientRect().top < window.innerHeight){
    //   $('.second-img').addClass('animated zoomIn slow delay-3s');
    //   $('.second-work').addClass('animated slideInRight slow delay-2s');
    // }
  });


});
