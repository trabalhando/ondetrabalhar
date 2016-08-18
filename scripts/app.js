(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Temporary places
  app.places = [
    {name: "Subway", lat: -14.8519418, lon: -40.838782, rate: 4},
    {name: "Lanchonete Saruê", lat: -14.85216, lon: -40.8379599, rate: 1},
    {name: "Dê Café e Lanches", lat: -14.851443, lon: -40.840437, rate: 3},
    {name: "Shalako Hotel", lat: -14.852687, lon: -40.837473, rate: 5},
    {name: "Bit Pizza", lat: -14.853182, lon: -40.837466, rate: 2}
  ];

  // Temporary localization
  app.area = {lat: -14.8530933, lon: -40.8387877, zoom: 18};

  app.message = "IT's gonna be Legen... Wait for it...";

  window.addEventListener('WebComponentsReady', function(e){
    app.message += ' DARY!';
  });
})(document);
