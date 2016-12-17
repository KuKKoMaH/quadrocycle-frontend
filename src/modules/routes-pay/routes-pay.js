var styles = require('../../js/styles').modules['routes-pay'];
var $ = require('jquery');

var $total = $('.' + styles.total);
var $routeSelect = $('.' + styles.select);
var $countSelect = $('.' + styles.count);
var routes = window.ROUTES || {};

var regExp = /[.,]/;
function toMoney (amount) {
  var rub = ('' + amount).split(regExp)[0];
  return rub.replace(/./g, function(c, i, a) {
    return i > 0 && (a.length - i) % 3 === 0 ? '\u00A0' + c : c;
  });
}

$('.' + styles.inc).on('click', function(e){
  e.preventDefault();
  var $btn = $(this);
  var $input = $btn.parent().find('.' + styles.input);
  var value = +$input.val() || 0;
  $input.val(value + 1);
  updateTotal();
});

$('.' + styles.dec).on('click', function (e) {
  e.preventDefault();
  var $btn = $(this);
  var $input = $btn.parent().find('.' + styles.input);
  var value = (+$input.val() || 0) - 1;
  $input.val(value < 0 ? 0 : value);
  updateTotal();
});

$countSelect.on('keyup', updateTotal);
$routeSelect.on('change', updateTotal);

function updateTotal() {
  var route = routes[$routeSelect.val()];
  var count = +$countSelect.val();
  var total = ( +route[count > 1 ? 1 : 0] || 0) * count;
  $total.html(total ? 'Итого стоимость: <span class="' + styles.total_value + '">' + toMoney(total) + ' руб.' : '');
}
