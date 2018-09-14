function cria_mapa() {
    console.log("function cria_mapa() {...");
        //PLOTANDO O IPGG
        LatLngIpgg = {lat: -23.4918588, lng: -46.44605790000003};

        infoWindowContentIpgg = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">IPGG - Instituto Paulista de Geriatria e Gerontologia</h1>'+
            '<div id="bodyContent">'+
            '<table>'+
            '<tr>'+
            '<td> <img src="./img/logo.png"></td>'+
            '<td> Pra&ccedil;a Padre Aleixo Monteiro Mafra, 34 - S&atilde;o Miguel Paulista"</td>'+
            '</tr>'+
            '</table>'+
            '<p>www.ipgg.saude.sp.gov.br</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: infoWindowContentIpgg
        });
        map = new google.maps.Map(document.getElementById('map'), {
            center: LatLngIpgg,
            zoom: 12,            
        });    
        var marker = new google.maps.Marker({
            position: LatLngIpgg,
            map: map
        });
    
        marker.setIcon('img/mapIcon.jpg');
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    
        return map;                                            
}

