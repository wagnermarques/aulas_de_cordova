let gMaps = (function(){

    r = {};
    r.plotedMarkers = [];
    
    r.infoWindowCompanyContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">IPGG - Instituto Paulista de Geriatria e Gerontologia</h1>'+
            '<div id="bodyContent">'+
            '<table>'+
            '<tr>'+
            '<td> <img src="./img/logo.jpg"></td>'+
            '<td id= "addressIPGG"> Praça Padre Aleixo Monteiro Mafra, 34 - São Miguel Paulista</td>'+
            '</tr>'+
            '</table>'+
            '<a href="http://www.saude.sp.gov.br/instituto-paulista-de-geriatria-e-gerontologia-ipgg-jose-ermirio-de-moraes/">http://www.saude.sp.gov.br/instituto-paulista-de-geriatria-e-gerontologia-ipgg-jose-ermirio-de-moraes/</a>'+
			'<button onclick="setSearchBox1(LatLngIpgg)">Definir como saída</button>'+
			'<button onclick="setSearchBox2(LatLngIpgg)">Definir como chegada</button>'+
            '</div>'+
            '</div>';

			
    r.infowindowCompany = new google.maps.InfoWindow({
        content: r.infoWindowCompanyContent;
    });
    
    r.map = new google.maps.Map(document.getElementById('map'), {
        center: geoLoc.LatLngDeviceCurrent,
        zoom: 13,            
    });    

    r.markerCompany = new google.maps.Marker({
        position: geoLoc.LatLngCompany,
        map: map
    });

    marker.setIcon('img/icon/currenteDeviceLocationIcon.jpg');
    marker.addListener('click', function() {
        infowindow.open(map, markerCompany);
    });

    return r;  
		
}();

