$(document).ready(function() {

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7127, lng: -74.0059},
          zoom: 8
        });

        var marker = new google.maps.Marker({
		position: {lat: -34.397, lng: 150.64},
		map: map,
		title: 'New York, NY'
		});
      }

});


