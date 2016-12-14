var styles = require('../../js/styles').modules.routes;
var $ = require('jquery');

var $headers = $('.' + styles.header);
var $content = $('.' + styles.tab);

$headers.on('click', function(){
  $headers.removeClass(styles.header_active);
  $content.removeClass(styles.tab_active);
  var $this = $(this);
  $this.addClass(styles.header_active);
  $('#' + $this.data('for')).addClass(styles.tab_active);
});