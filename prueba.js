$(document).ready(function(){
	
	$("#boton").click(
		function getLocation() {	
		    navigator.geolocation.getCurrentPosition(showPosition);
		}	
	);	
	
	function showPosition(position) {
		$("#parrafo").html("Latitude: " + position.coords.latitude +"<br>"+
		" Longitude: " + position.coords.longitude);
		
		showMap(position.coords.latitude, position.coords.longitude);
		
	}
	
	function showMap(x,y){		
		var map = L.map('map').setView([x, y], 17);

		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		// add a marker in the given location, attach some popup content to it and open the popup
		L.marker([x, y]).addTo(map)
			.bindPopup('Estas aqui')
			.openPopup();		
	}	
});
