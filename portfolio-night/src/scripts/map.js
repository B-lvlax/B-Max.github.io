/*======================================================
  MAP
======================================================*/
function initMap() {
  var $mapElement = document.getElementById("map");
  if (!$mapElement) return;

  var $mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: new google.maps.LatLng(50.43, 30.6, 18),
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#4369aa"
      }, {
        "visibility": "on"
      }]
    }]
  };

  if (isMobile.any()) $mapOptions.center = new google.maps.LatLng(50.45, 30.65, 18);

  var
    $map = new google.maps.Map($mapElement, $mapOptions),
    $marker = new google.maps.Marker({
      position: new google.maps.LatLng(50.412, 30.67, 0),
      map: $map,
      icon: {
        url: "img/marker.svg"
      },
      scaledSize: google.maps.Size(44, 54),
      animation: google.maps.Animation.BOUNCE
    });
};
