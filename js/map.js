  // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,
          disableDefaultUI: true,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(24.2225362,55.7555418),  // Xpertcube

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                     styles:[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "29"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#008fff"
            },
            {
                "saturation": "-73"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-72"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "32"
            },
            {
                "weight": "0.42"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "-53"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-86"
            },
            {
                "gamma": "1.13"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#006dff"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "1.44"
            },
            {
                "saturation": "-67"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "0.84"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "0.79"
            },
            {
                "gamma": "0.5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-78"
            },
            {
                "saturation": "-91"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "-69"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "10"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-35"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-97"
            },
            {
                "lightness": "-14"
            }
        ]
    }
]

                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(24.2225362,55.7555418), 
          
          url:'https://www.google.com/maps/place/Bynuna+tactical+%D8%A8%D9%8A%D9%86%D9%88%D9%86%D8%A9+%D9%84%D9%84%D9%85%D8%B9%D8%AF%D8%A7%D8%AA+%D8%A7%D9%84%D8%B9%D8%B3%D9%83%D8%B1%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%E2%80%AD/@24.2225362,55.7555418,17z/data=!3m1!4b1!4m5!3m4!1s0x3e8ab13553641f2f:0x635c55f808f0c156!8m2!3d24.2225362!4d55.7577305',
                    map: map,
            icon: 'images/map_icon.png',
                    title: 'MSK INVESTMENT'
                });
        
        google.maps.event.addListener(marker, 'click', function() {
          window.open(marker.url, '_blank');
        });
            }