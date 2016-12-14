var styles = require('../../js/styles').modules.testimonials;
var $ = require('jquery');
var slick = require('slick-carousel');

$('.' + styles.slider).slick({
  infinite:       true,
  slidesToShow:   3,
  slidesToScroll: 3,
});