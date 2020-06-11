/*
  Essa variavel representa pra gente um objeto que vai
  que tem a responsabilidade de resolver nossas necessidades
  relativas a geolocalizacao

  Ela usa o plugin do cordova para obter a geolocalizacao do 
  dispositivo 
*/
let geolocalizacao = {

    _geocoder : null,
    _companyLocation :  {lat: undefined, lng: undefined},
    _deviceCurrentLocation : {lat: undefined, lng: undefined},


    _geoOptions: {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
    },

    
    _getGeocoder : function(){
        if( ! this.geocoder ){
            this._geocoder = new google.maps.Geocoder();
        }
        return this._geocoder;
    },



    getDeviceCurrentLocation : function(successCallback,errCallback){
        /*
          Esse objeto, o geolocation e criado pelo
          plugin de geolocalizacao do cordova, portanto, se 
          o plugin nao estiver instalado nao da pra usa-lo
        */
        if ( ! navigator.geolocation ){
            alert("ERRO: Instalar plugin de geolocalizacao");
            return;
        }


        geolocalizacao._User_onGeolocationSuccess = successCallback;
        geolocalizacao._User_onGeolocationError = errCallback;

        navigator.geolocation.getCurrentPosition(
            geolocalizacao._onGeolocationSuccess,
            geolocalizacao._onGeolocationError,
            { enableHighAccuracy: true });

        
        if( ! this._deviceCurrentLocation ) {
            this._deviceCurrentLocation = {lat: undefined, lng: undefined};
        }

        return this.deviceCurrentLocation;        
    },
    
    getCompanyLocation : function(){
        if( ! this.companyLocation ) {
            geolocalizacao.companyLocation = {lat: undefined, lng: undefined};
        }

        return this.deviceCurrentLocation;        
    },


    //FUNCOES DE CALLBACK
    _onGeolocationSuccess: function(position) {
        
        console.log("onGeolocationSuccess: function(position) {...");
        
        geolocalizacao._deviceCurrentLocation.lat = position.coords.latitude;
        console.log("### geolocalizador._deviceCurrentLocation.lat = position.coords.latitude = "+ position.coords.latitude);
        
        geolocalizacao._deviceCurrentLocation.lng = position.coords.longitude;
        console.log("geolocalizador._deviceCurrentLocation.lng="+position.coords.longitude);
        
        geolocalizacao._deviceCurrentLocation.altitude  = position.coords.altitude;
        console.log("geolocalizador._deviceCurrentLocation.altitude="+position.coords.altitude);
        
        geolocalizacao._deviceCurrentLocation.accuracy = position.coords.accuracy;
        console.log("geolocalizador._deviceCurrentLocation.accuracy="+position.coords.accuracy);

        geolocalizacao._deviceCurrentLocation.altitudeAccuracy = position.coords.altitudeAccuracy;
        console.log("geolocalizador._deviceCurrentLocation.altitudeAccuracy="+position.coords.altitudeAccuracy);

        /*
          The GeolocationCoordinates.heading 
          Propriedade read-only do tipo double
          Representa a direcaoa na qual o dispositivo esta se movendo
          Seu valor e representado em graus, onde zero graus representa
          que o dispositivo esta indo para o norte.
          A direcao e representada no sentido horario.
          Ou seja: 
          Leste he 90 graus
          Oeste,  270 graus
          Se o valor 
          GeolocationCoordinates.speed for  0,o valor de heading sera NaN.
          Ou seja, se o heading for 0 o dispositivo esta parado.
          Caso o dispositivo nao tenha suporte a essa propriedade,
          o valor obtido sera null.
        */
        geolocalizacao._deviceCurrentLocation.heading = position.coords.heading;
        console.log("geolocalizador._deviceCurrentLocation=.heading"+position.coords.heading);
        
        geolocalizacao._deviceCurrentLocation.speed = position.coords.speed;
        console.log("geolocalizador._deviceCurrentLocation.speed="+position.coords.speed);
        
        geolocalizacao._deviceCurrentLocation.timestamp = position.timestamp;
        console.log("geolocalizador._deviceCurrentLocation.timestamp="+position.timestamp);

        
        try{
            geolocalizacao._User_onGeolocationSuccess(geolocalizacao._deviceCurrentLocation);
        }catch(err){
            geolocalizacao._User_onGeolocationSuccess = undefined;
        }

    },

    // onError Callback receives a PositionError object
    //
    _onGeolocationError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
        
        try{
            geolocalizacao._User_onGeolocationError();
        }catch(err){
            geolocalizacao._User_onGeolocationError = undefined;
        }
    }

}
