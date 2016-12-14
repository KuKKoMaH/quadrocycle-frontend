var styles = require('../../js/styles').modules.photos;
var $ = require('jquery');
var magnificPopup = require('magnific-popup');

$('.open_popup').magnificPopup({
  type: 'inline',
  preloader: false,

  callbacks: {
    beforeOpen: function() {

    }
  }
});