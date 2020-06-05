var app = {

    map: null,
    mapMarkers: new Array(),
    
    geoLoc: {},
        
    geoOptions: {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
    },
    

    
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    
    onDeviceReady: function() {

        document.addEventListener("offline", app.onOffline, false);
        document.addEventListener("online", app.onOnline, false);

        console.log("onDeviceReady: function() {...");
        //https://cordova.apache.org/docs/en/latest/cordova/events/events.html
        document.addEventListener("resume", app.onResume, false);
        document.addEventListener("pause", app.onPause, false);

        //A N D R O  I D   B U T T O N S
        document.addEventListener("searchbutton", app.onSearchKeyDown, false);
        document.addEventListener("backbutton", app.onBackKeyDown, false);
        
        //The event fires when the user presses the menu button. Applying an event handler overrides the default menu button behavior.
        document.addEventListener("menubutton", app.onMenuKeyDown, false);

        //The event fires when the user presses the volume down button. If you need to override the default volume down behavior you can register an event listener for the volumedownbutton event.
        document.addEventListener("volumedownbutton", app.onVolumeDownKeyDown, false);

        //The event fires when the user presses the volume up button. If you need to override the default volume up behavior you can register an event listener for the volumeupbutton event.
        document.addEventListener("volumeupbutton", app.onVolumeUpKeyDown, false);

        app.getNetworkInfo();
    },


    
    //NETWORK INFO
    //https://www.tutorialspoint.com/cordova/cordova_network.htm
    getNetworkInfo: function () {
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
            app.onOnline();
        }
    },
    
    onOffline: function () {
        alert("onOffline: function () {..");
    },
    
    onOnline: function () {
        alert("function onOnline () {...");

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
        navigator.geolocation.getCurrentPosition(
            app.onGeolocationSuccess,
            app.onGeolocationError,
            { enableHighAccuracy: true });
    },


    //ANDROID APP LIFE CICLE EVENTS
    onResume: function () {
        alert("function onResume () {...");
        app.loadMapsApi();
    },

    onPause: function () {
        alert("function onPause () {...");
        app.loadMapsApi();
    },




    //A N D R O  I D   B U T T O N S
    onSearchKeyDown: function () {
        alert("function onSearchKeyDown () {...");        
    },

    onBackKeyDown: function () {
        alert("function onBackKeyDown () {...");
    },

    
    onMenuKeyDown: function () {
        alert("function onMenuKeyDown () {...");
    },

    
    onVolumeDownKeyDown: function() {
        alert("function onVolumeDownKeyDown() {...");
    },


    onVolumeUpKeyDown: function() {
        alert("function onVolumeUpKeyDown() {...");
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
        app.carregaScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBc9930yEzp9USRenvVVY5S8LLsl9rrmL4&callback=initMap");
        app.carregaScript("./js/gmaps.js");
        app.carregaScript("./js/geoLocation.js");
            
    },//function loadMapsApi () {

    
    onGeolocationSuccess: function(position) {

        console.log("onGeolocationSuccess: function(position) {...");
        
        app.geoLoc.latitude = position.coords.latitude;
        console.log("### app.geoLoc.latitude = position.coords.latitude = "+ position.coords.latitude);
        
        app.geoLoc.longitude = position.coords.longitude;
        console.log("position.coords.longitude="+position.coords.longitude);
        
        app.geoLoc.altitude = position.coords.altitude;
        console.log("position.coords.altitude="+position.coords.altitude);
        
        app.geoLoc.accuracy = position.coords.accuracy;
        console.log("position.coords.accuracy="+position.coords.accuracy);

        app.geoLoc.altitudeAccuracy = position.coords.altitudeAccuracy;
        console.log("position.coords.altitudeAccuracy="+position.coords.altitudeAccuracy);
        
        app.geoLoc.heading = position.coords.heading;
        console.log("position.coords.heading="+position.coords.heading);
        
        app.geoLoc.speed = position.coords.speed;
        console.log("position.coords.speed="+position.coords.speed);
        
        app.geoLoc.timestamp = position.timestamp;
        console.log("position.timestamp="+position.timestamp);
        
        console.log(JSON.stringify(app.geoLoc));
        
        app.loadMapsApi();
    },


    // onError Callback receives a PositionError object
    //
    onGeolocationError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },


    //https://cordova.apache.org/docs/en/9.x/reference/cordova-plugin-network-information/index.html
    getLocationAuthorizationStatus: function(){
        cordova.plugins.diagnostic.getLocationAuthorizationStatus(function(status){
            switch(status){
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                alert("Permission not requested");
                app.requestLocationAuthorization();
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                alert("Permission denied");
                app.requestLocationAuthorization();
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                alert("Permission permanently denied");
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                alert("Permission granted always");
                break;    
            case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                alert("Permission granted only when in use (Android >= 10)");
                break;                 
            }
        }, function(error){
            console.error(error);
        });
    },


    //ANDROID PERMISSIONS    
    requestLocationAuthorization: function(){
        cordova.plugins.diagnostic.requestLocationAuthorization(
            app.successCallbackForrequestLocationAuthorization,
            app.errorCallbackForrequestLocationAuthorization,
            cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS);//WHEN_IN_USE
    },

    successCallbackForRequestLocationAuthorization: function(status){
        console.log("successCallbackForrequestLocationAuthorization: function(status){...");
        console.log("status = "+status);
    },
    
    errorCallbackForRequestLocationAuthorization: function(err){
        console.log("errorCallbackForrequestLocationAuthorization: function(err){...");
        console.log(err);
    }

};

app.initialize();
