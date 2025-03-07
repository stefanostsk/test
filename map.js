map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

// setInterval(function(){
//     map.locate();
// },7000 )

// //map.locate()

// map.on('locationfound',function(e){
//     // if (mrkCurrentLocation){
//     //     mrkCurrentLocation.remove();
//     // }
//     mrkCurrentLocation=L.circle(e.latlng,{radius:e.accuracy/2}).addTo(map);
//     map.setView(e.latlng,14);
// })

// map.on('locationerror',function(e){
//     console.log(e);
//     //alert("Location was not found");
// })

// marker = L.marker([51.5, -0.09]).addTo(map);
// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// if (isMobile) {
//   /* your code here */
// }
// popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);