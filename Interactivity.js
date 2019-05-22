//jshint esversion:6

$(document).ready(() => {

const maxwidth = $(html).css('max-width');
const $jumbotron = $('.fa-chevron-down');

$jumbotron.on('click', event => {
  $jumbotron.addClass('disabled');
});

// if (maxwidth === '600px') {
//   $jumbotron.addClass('')
// }

});
