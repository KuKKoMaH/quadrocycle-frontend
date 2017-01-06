var styles = require('../../js/styles').modules.routes;
var $ = require('jquery');
var lazyload = require('../../pages/index/index');
var dotdotdot = require('../../js/dotdotdot');
var magnificPopup = require('magnific-popup');

var $headers = $('.' + styles.header);
var $content = $('.' + styles.tab);
var $popup = $("#route-info");


$headers.on('click', function(){
  $headers.removeClass(styles.header_active);
  $content.removeClass(styles.tab_active);
  var $this = $(this);
  $this.addClass(styles.header_active);
  $('#' + $this.data('for')).addClass(styles.tab_active);
  lazyload.update();
});

$('.' + styles.description).dotdotdot({
  after: "." + styles.read_more,
  callback: function( isTruncated, orgContent ) {
    if (isTruncated) {

    }
  },
});

$("." + styles.read_more).on('click', function(e) {
  e.preventDefault();
  var $route = $(this).parents('.' + styles.item_inner);
  var title = $route.find('.' + styles.title).text().trim();
  var content = $route.find('.' + styles.description).triggerHandler("originalContent").text().trim();

  $popup.find('.' + styles.popup_header).html(title);
  $popup.find('.' + styles.popup_content).html(content);

  $.magnificPopup.open({
    items: {
      src: '#route-info',
      type: 'inline'
    }
  }, 0);
});