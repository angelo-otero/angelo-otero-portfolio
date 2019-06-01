//jshint esversion:6

$(document).ready(() => {

  // screen dimension selectors
  const screenWidth = $(window).width();
  const screenHeight = $(window).height();

  // bootstrap carousel class selectors
  const carouselControls = $('.my-skills-container');
  const carouselInner = $('.skill-category-container');
  const carouselItem = $('.skill-category');
  const carouselArrows = $('.carousel-arrows');
  const carouselIndicators = $('.carousel-indicators');

  // bootstrap card class selectors
  const bootstrapCard = $('.my-work-container');
  const bootstrapcardImage = $('.my-work-container img');
  const bootstrapCardBody = $('.my-work-description');
  const bootstrapCardTitle = $('.my-work-description h2');
  const bootstrapCardText = $('.my-work-description p');

  // selectors for nav links
  const homeButton = $('#home-btn');
  const aboutMeButton = $('#about-me-btn');
  const myWorkButton = $('#my-work-btn');
  const contactMeButton = $('#contact-me-btn');
  const chevronButton = $('#chevron-btn');



  // changes site layout when screenwidth is 620 px in portrait mode
  if (screenWidth <= '620' && screenWidth < screenHeight) {
    // adds related carousel classes to proper divs
    carouselControls.addClass('carousel slide');
    carouselInner.addClass('carousel-inner');
    carouselItem.addClass('carousel-item');
    carouselArrows.show();
    carouselIndicators.show();

    // adds related card classes to proper divs
    bootstrapCard.addClass('card');
    bootstrapCard.removeClass('my-second-work');
    bootstrapcardImage.addClass('card-img-top');
    bootstrapCardBody.addClass('card-body');
    bootstrapCardTitle.addClass('card-title');
    bootstrapCardText.addClass('card-text');
  } else {
    // removes related carousel classes to proper divs
    carouselControls.removeClass('carousel slide');
    carouselInner.removeClass('carousel-inner');
    carouselItem.removeClass('carousel-item');
    carouselArrows.hide();
    carouselIndicators.hide();
    bootstrapCard.removeClass('card');

    // removes related card classes to proper divs
    bootstrapCard.removeClass('card');
    bootstrapcardImage.removeClass('card-img-top');
    bootstrapCardBody.removeClass('card-body');
    bootstrapCardTitle.removeClass('card-title');
    bootstrapCardText.removeClass('card-text');
  }

  // scrolls down to proper section based on nav link clicked
  homeButton.click(function() {
    $('html, body').animate({
    scrollTop: $("#hero-landing").offset().top}, 1000);
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

  chevronButton.on('mouseEnter', function(){
    chevronButton.css({
      'color': '#98ccd3',
      'cursor': 'pointer'
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

});
