var map;
var marker;
var ip_lat;
var ip_lng;
var IpLatLng;
var ip;

function initMap() {

	$.ajax({
		url:'http://ip-api.com/json/'+ip,
		type:'GET',
		async: false,
		responseType:'JSON',
		success:function(data){
			ip_lat = data.lat;
			ip_lng = data.lon;
			IpLatLng = new google.maps.LatLng(ip_lat,ip_lng);
		}
	});
	console.log();
	
	map = new google.maps.Map(document.getElementById('map-container'), {
		zoom: 8,
		center:IpLatLng
	});
	var image = {
    url: './custom_marker.png',

    

    origin: new google.maps.Point(0, 0),
    
    anchor: new google.maps.Point(16,16)
  };
	marker = new google.maps.Marker({
		map: map,
		draggable:true,
		icon:image
	});

}
function getTime(lat,lng){
	$.ajax({
		url:'http://api.geonames.org/timezone?lat='+lat+'&lng='+lng+'&username=iansee'
	})





}

google.maps.event.addDomListener(window, 'load', initMap);
