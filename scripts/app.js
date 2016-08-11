(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.message = "IT's gonna be Legen... Wait for it...";

  window.addEventListener('WebComponentsReady', function(e){
    app.message += ' DARY!';
  });
})(document);
