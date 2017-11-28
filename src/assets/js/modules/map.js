// ======================================================================
//
// Map
//
// ======================================================================
 
$(document).ready(function () {
	//set your google maps parameters
	var latitude = 42.247495,
		longitude = -82.433006,
		map_zoom = 16;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = (is_internetExplorer11) ? '/assets/img/icon-location.png' : '/assets/img/icon-location.png';

	//define the basic color of your map, plus a value for saturation and brightness
	var main_color = '#000',
		saturation_value = -100,
		brightness_value = -50;

	//we define here the style of the map
	var style = [
		{
			featureType: "all",
			elementType: "labels.text.stroke",
			stylers: [
				{
					visibility: 'on'
				},
				{
					color: "#000000"
				},
				{
					lightness: 20
				}
			]
		},
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{
					saturation: saturation_value
				}
      ]
    },
		{ //poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{
					visibility: "off"
				}
      ]
    },
		{
			//don't show highways lables on the map
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{
					visibility: "on"
				}
          ]
      },
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off"
				}
      ]
    },
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off"
				}
      ]
    },
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{
					visibility: "off"
				}
      ]
    },
    //style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "landscape",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]

    },
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    },
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{
					hue: main_color
				},
				{
					visibility: "on"
				},
				{
					lightness: brightness_value
				},
				{
					saturation: saturation_value
				}
      ]
    }
  ];

	//set google map options
	var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		}
		//inizialize the map
	var map = new google.maps.Map(document.getElementsByClassName('map__container')[0], map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
		var controlUIzoomIn = document.getElementsByClassName('map__zoom-in')[0],
			controlUIzoomOut = document.getElementsByClassName('map__zoom-out')[0];
		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
			map.setZoom(map.getZoom() + 1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
			map.setZoom(map.getZoom() - 1)
		});
	}

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});
