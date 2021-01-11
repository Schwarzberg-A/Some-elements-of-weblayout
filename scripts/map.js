// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map1", {
    center: [48.87219657376512, 2.354223999999991],
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([48.87219657376512, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/sun.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
});
  myMap.geoObjects.add(myPlacemark);
}

