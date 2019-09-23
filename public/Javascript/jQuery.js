//jshint esversion:6

$(document).ready(() => {
  // selectors for nav links
  const homeButton = $('#home-btn');
  const aboutMeButton = $('#about-me-btn');
  const myWorkButton = $('#my-work-btn');
  const contactMeButton = $('#contact-me-btn');
  const chevronButton = $('#chevron-btn');
  const logo = $('.logo');

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

});
