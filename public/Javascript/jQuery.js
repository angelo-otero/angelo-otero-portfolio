//jshint esversion:6

$(document).ready(() => {

  const screenWidth = $(window).width();
  const screenHeight = $(window).height();

  const carouselControls = $('.my-skills-container');
  const carouselInner = $('.skill-category-container');
  const carouselItem = $('.skill-category');
  const carouselArrows = $('.carousel-arrows');
  const carouselIndicators = $('.carousel-indicators');

  const bootstrapCard = $('.my-work-container');
  const bootstrapcardImage = $('.my-work-container img');
  const bootstrapCardBody = $('.my-work-description');
  const bootstrapCardTitle = $('.my-work-description h2');
  const bootstrapCardText = $('.my-work-description p');

  if (screenWidth <= '620' && screenWidth < screenHeight) {
    carouselControls.addClass('carousel slide');
    carouselInner.addClass('carousel-inner');
    carouselItem.addClass('carousel-item');
    carouselArrows.show();
    carouselIndicators.show();

    bootstrapCard.addClass('card');
    bootstrapCard.removeClass('my-second-work');
    bootstrapcardImage.addClass('card-img-top');
    bootstrapCardBody.addClass('card-body');
    bootstrapCardTitle.addClass('card-title');
    bootstrapCardText.addClass('card-text');
  } else {
    carouselControls.removeClass('carousel slide');
    carouselInner.removeClass('carousel-inner');
    carouselItem.removeClass('carousel-item');
    carouselArrows.hide();
    carouselIndicators.hide();
    bootstrapCard.removeClass('card');

    bootstrapCard.removeClass('card');
    bootstrapcardImage.removeClass('card-img-top');
    bootstrapCardBody.removeClass('card-body');
    bootstrapCardTitle.removeClass('card-title');
    bootstrapCardText.removeClass('card-text');
  }

});
