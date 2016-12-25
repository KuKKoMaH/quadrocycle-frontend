var styles = require('../../js/styles').modules['routes-pay'];
var $ = require('jquery');

var $total = $('.' + styles.total);
var $routeSelect = $('.' + styles.select);
var $peopleSelect = $('.' + styles.people);
var $quadroSelect = $('.' + styles.quadro);
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

$peopleSelect.on('keyup', updateTotal);
$quadroSelect.on('keyup', updateTotal);
$routeSelect.on('change', updateTotal);

function updateTotal() {
  var route = routes[$routeSelect.val()];
  var count = Number.parseInt($peopleSelect.val());
  var quadro = Number.parseInt($quadroSelect.val());

  if (isNaN(count) || count < 1 || isNaN(quadro) || quadro < 1 || !route || count < quadro || count > quadro * 2) {
    $total.html('');
    return;
  }

  var perQuadro = +route[quadro > 2 ? 1 : 0] || 0;
  var additionalPeople = count === quadro ? 0 : count - quadro;
  var total = perQuadro * quadro + additionalPeople * route[2];
  $total.html('Итого стоимость: <span class="' + styles.total_value + '">' + toMoney(total) + ' руб.');
}
