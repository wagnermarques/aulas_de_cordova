//https://stackoverflow.com/questions/3922764/load-google-maps-v3-dynamically-with-ajax
////https://stackoverflow.com/questions/29612125/how-can-i-and-should-i-load-my-js-files-from-a-different-file-for-cleanliness
window.gMapsLoaded = false;
window.LatLngIpgg = {lat: -23.4918588, lng: -46.44605790000003};

window.gMapsCallback = function(){
    alert("window.gMapsCallback = function(){...");
    console.log("##### window.gMapsCallback = function(){...");
    window.gMapsLoaded = true;
    window.inicializaMapa();
}

window.loadGoogleMaps = function(){
    console.log("##### window.loadGoogleMaps = function(){...");
    if(window.gMapsLoaded) return window.gMapsCallback();
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src","http://maps.google.com/maps/api/js?key=AIzaSyAF4SsLUCcsaGGwVKQeGPWUQ9p-mKaA7Kw&sensor=false&callback=gMapsCallback");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}

window.inicializaMapa = function(){
    console.log("##### function inicializaMapa(){...");
    if(undefined == google) window.loadGoogleMaps();
    window.map = new google.maps.Map(document.getElementById('map'),{
        center: window.LatLngIpgg,
        zoom: 12,            
    });
}

function cria_mapa() {
    //PLOTANDO O IPGG
    //var LatLngIpgg = new google.maps.LatLng( -23.4918588, -46.44605790000003);
    
 //    infoWindowContentIpgg = '<div id="content">'+
 //        '<div id="siteNotice">'+
 //        '</div>'+
 //        '<h1 id="firstHeading" class="firstHeading">IPGG - Instituto Paulista de Geriatria e Gerontologia</h1>'+
 //        '<div id="bodyContent">'+ 
 //       '<table>'+
 //        '<tr>'+
 //        '<td> <img src="./img/logo.png"></td>'+
 //        '<td> Pra&ccedil;a Padre Aleixo Monteiro Mafra, 34 - S&atilde;o Miguel Paulista"</td>'+
 //        '</tr>'+
 //        '</table>'+
 //        '<p>www.ipgg.saude.sp.gov.br</p>'+
 //        '</div>'+
 //        '</div>';
    
 //    var infowindow = new google.maps.InfoWindow({
  //       content: infoWindowContentIpgg
  //   });

 //    console.log("##### document.getElementById('map')");
  //   console.log(document.getElementById('map'));
 
    

    // var marker = new google.maps.Marker({
    //     position: LatLngIpgg,
    //     map: map
    // });
    
    //marker.setIcon('img/mapIcon.jpg');
    //marker.addListener('click', function() {
    //infowindow.open(map, marker);
    //});
    
     //app.map = map;                                            
};

