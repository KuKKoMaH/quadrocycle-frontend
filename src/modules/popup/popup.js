var styles = require('../../js/styles').modules.photos;
var $ = require('jquery');
var magnificPopup = require('magnific-popup');
var maskedInput = require('jquery.maskedinput/src/jquery.maskedinput.js');

// $('.open_popup').magnificPopup({
//   type: 'inline',
//   preloader: false,
//
//   callbacks: {
//     beforeOpen: function(e) {
//       console.log(e);
//     }
//   }
// });
//
// $('.open_popup').on('mfpBeforeOpen', function(e) {
//   console.log(e);
// })

$('.open_popup').on('click', function(e) {
  e.preventDefault();
  var $button = $(e.delegateTarget);
  var type = $button.attr('data-type');
  var target = $button.attr('href');

  $(target).find('.type').val(type);

  $.magnificPopup.open({
    items: {
      src: target,
      type: 'inline'
    }
  }, 0);
});

$('.phone').mask("+7 (999) 999-99-99", { autoclear: false });