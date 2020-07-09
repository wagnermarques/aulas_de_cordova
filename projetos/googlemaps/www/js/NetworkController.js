let NetworkController = {
    
    //https://www.tutorialspoint.com/cordova/cordova_network.htm
    getNetworkInfoAndTryLoadMap: function () {
        let networkState = navigator.connection.type;
        let states = {};
        states[Connection.UNKNOWN]  = 'Tipo de Conexao Desconhecida';
        states[Connection.ETHERNET] = 'Conexao Cabeada';
        states[Connection.WIFI]     = 'Conexao WiFi';
        states[Connection.CELL_2G]  = 'Conexao 2G';
        states[Connection.CELL_3G]  = 'Conexao 3G';
        states[Connection.CELL_4G]  = 'Conexao 4G';
        states[Connection.CELL]     = 'Conexao Generica';
        states[Connection.NONE]     = 'Sem Conexao';
        alert('Connection type: ' + states[networkState]);

        if(networkState !== states[Connection.NONE]){
            //se o celular estiver conectado, chamar a funcao onOnline
            //porque quando o app abre, mesmo que o cell esteja on line
            //a funcao onOnline nao roda, ela so roda quando o cell esta
            //offline e o usuario habilita a conexao ai sim a funcao onOnline roda
            //mas com esse teste a gente sabe que o cell ta on line e podemos rodar
            //a funcao onOnline pro app usar a internet
            NetworkController.onOnline();
        }
    },
    
    onOffline: function () {
        console.log("onOffline: function () {..");
    },
    
    onOnline: function () {
        console.log("function onOnline () {...");

        //obter a localizacao do dispositivo so faz sentido se o dispositivo estiver online
        //app.getLocationAuthorizationStatus();

        //Codigo antigo, com plugin de geolocalizacao do cordova
        //depreciado em favor de usar a geolocalizacao do navegador
        //navigator.geolocation.getCurrentPosition(app.onGeolocationSuccess, app.onGeolocationError);
        //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
//        if(!navigator.geolocation) {
//            status.textContent = 'Geolocalização não suportada';
//        } else {
//            status.textContent = 'GeoLocalizando...';
//            navigator.geolocation.getCurrentPosition(onSuccess, onError);
//            navigator.geolocation.getCurrentPosition(
//                app.onGeolocationSuccess,
//                app.onGeolocationError,
//                app.geoOptions
//            );
//        }


        //apesar de neste ponto termos rede pra carregar
        //o mapa, vamos esperar mais um pouquinho o carregamento do mapa
        //ate que nosso geoposicionamento esteja conseguido
        //por isso
        //app.loadMapsApi();
        //sera invocada no onGeolocationSuccess

        MapController.loadMapsApi();

        Geolocalizacao.getDeviceCurrentLocation(function(deviceCurrentLocation){            
            console.log(" @@@ geolocalizacao.getDeviceCurrentLocation completa!");
            console.log(" @@@ he seguro carregar o mapa agora!");
            console.log(" @@@ deviceCurrentLocation: "+deviceCurrentLocation);
            console.log(" @@@ deviceCurrentLocation.lat = "+ deviceCurrentLocation.lat);
            console.log(" @@@ deviceCurrentLocation.lng = "+ deviceCurrentLocation.lng);
            
            MapController.mapInitizalization(deviceCurrentLocation);
        },function(){
            console.log(" %%% ERRO: geolocalizacao.getDeviceCurrentLocation!");
        });

    }//onOnline: function () {...
}
