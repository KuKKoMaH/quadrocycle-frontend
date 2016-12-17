var styles = require('../../js/styles').modules.header;
var $ = require('jquery');

var HEADER_HEIGHT = 80;

$('.' + styles.item).on('click', function (e) {
  e.preventDefault();
  var href = $(e.target).attr('href');
  var $to = $(href);
  if ($to.length) $('html,body').animate({ scrollTop: $to.offset().top - HEADER_HEIGHT }, '250');
});
