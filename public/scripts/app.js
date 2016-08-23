(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Configure app
  app.config = {
    firebase: {
      name: "ondetrabalhar",
      apiKey: "AIzaSyD7UAYUdafNm6oNssSrwjWptYJOWxrvzsg",
      authDomain: "ondetrabalhar-faacc.firebaseapp.com",
      databaseURL: "https://ondetrabalhar-faacc.firebaseio.com",
      storageBucket: "ondetrabalhar-faacc.appspot.com"
    }
  };

  // Temporary localization
  app.area = {lat: -14.8530933, lon: -40.8387877, zoom: 18};

  app.message = "IT's gonna be Legen... Wait for it...";

  window.addEventListener('WebComponentsReady', function(e){
    app.message += ' DARY!';
    app.$.toast.show();
  });

  // Handle new place
  app._addPlace = function(event) {
    var place = event.detail;
    app.$.query.ref.push(place);
  };
})(document);
