var styles = require('../../js/styles').modules.contacts;
var $ = require('jquery');
var scriptLoader = require('../../js/scriptLoader');

var $content = $('.' + styles.tab);

$('.' + styles.button).on('click', function (e) {
  e.preventDefault();
  $content.removeClass(styles.tab_active);
  var $this = $(this);
  $('#' + $this.data('for')).addClass(styles.tab_active);
});

function createMap() {
  var $el = $("#map");
  var zoom = $el.data('zoom') || 7;
  var coords = [$el.data('lat'), $el.data('lng')];

  var map = new ymaps.Map('map', {
    center: coords,
    zoom: zoom,
    controls: ['zoomControl', 'fullscreenControl']
  });
  map.behaviors.disable('scrollZoom');

  var placemark = new ymaps.Placemark(coords);
  map.geoObjects.add(placemark);
}

scriptLoader('//api-maps.yandex.ru/2.1/?lang=ru_RU').then(function(){
  ymaps.ready(createMap);
});
