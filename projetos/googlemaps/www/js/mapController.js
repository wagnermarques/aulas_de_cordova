let mapController = {

    
    _map : null,
    
    //array onde vamos armazenar os markers que a gente criar
    //Lembrando que um dos markers sera o da empresa
    markers : [],


    mapInitizalization : function(centerLocation){
        console.log( " $$$ mapInitizalization : function(centerLocation){ ...");
        mapController._map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(centerLocation.lat, centerLocation.lng),
            zoom: 13
        })
    },
          
    //Um dos marquers especiais e o da propria copanhia
    //Quando clicamos nele abre-se um info window com dados da empresa
    setCompanyMarker : function(){
        if(! mapController._map){
            console.log("Erro: setCompanyMarker : function(){... nao da pra setar o marker da companhina com o mapa ainda nao inicializado...");
            return;
        }
        
        let infoWindowHtml = '<div id="content">'+
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
			
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowHtml
        });
    
        let markerCompany = new google.maps.Marker({
            position: geoLoc.LatLngCompany,
            map: mapController._map
        });

        markerCompany.setIcon('img/icon/currenteDeviceLocationIcon.jpg');
        markerCompany.addListener('click', function() {
            infowindow.open,(mapController._map, markerCompany);
        });
    },


    /*
     * Neste ponto temos total certeza de que o dispositivo esta conectado
     * A geolocalizacao do dispositivo funcionou
     */
    loadMapsApi: function () {
        alert("function loadMapsApi () {...");

        // load maps api
        // if online and maps not already loaded
        //    then load maps api
        if (navigator.connection.type === Connection.NONE //offline
            || (window.google !== undefined && window.google.maps))//ja carregado
        {
            return;
        }

        //https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br
        //appUtils.carregaScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBc9930yEzp9USRenvVVY5S8LLsl9rrmL4&callback=initMap");
        appUtils.carregaScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBc9930yEzp9USRenvVVY5S8LLsl9rrmL4");
            
    },//function loadMapsApi () {

}

