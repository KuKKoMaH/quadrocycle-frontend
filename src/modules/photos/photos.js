var styles = require('../../js/styles').modules.photos;
var $ = require('jquery');
var magnificPopup = require('magnific-popup');

var $more = $('.' + styles.more);
var $moreButton = $('.' + styles.more_button);
var $photos = $('.' + styles.photos);

$moreButton.on('click', function() {
  $more.show();
  $moreButton.hide();
});

$photos.magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  }
});
