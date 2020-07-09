var app = {

        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    
    onDeviceReady: function() {

        //precisamos saber quando o dispositivo fica on line ou offline
        //isso e importante pra saber se podemos fazer operacoes no mapa
        //que vao depender de internet
        document.addEventListener("offline", NetworkController.onOffline, false);
        document.addEventListener("online", NetworkController.onOnline, false);


        //Aqui no on resume e no on pause
        //nosso codigo consegue detectar se o usuario
        //deixou nosso app em segundo plano e quando nosso
        //app volta pro primeiro plano (resume)
        //https://cordova.apache.org/docs/en/latest/cordova/events/events.html
        document.addEventListener("resume", ActivityLifeCicleController.onResume, false);
        document.addEventListener("pause", ActivityLifeCicleController.onPause, false);


        //A N D R O  I D   B U T T O N S
        document.addEventListener("searchbutton", DeviceButtonsController.onSearchKeyDown, false);
        document.addEventListener("backbutton", DeviceButtonsController.onBackKeyDown, false);
        
        //The event fires when the user presses the menu button.
        //Applying an event handler overrides the default menu button behavior.
        document.addEventListener("menubutton", DeviceButtonsController.onMenuKeyDown, false);

        //The event fires when the user presses the volume down button.
        //If you need to override the default volume down behavior you can register an event listener for the volumedownbutton event.
        document.addEventListener("volumedownbutton", DeviceButtonsController.onVolumeDownKeyDown, false);

        //The event fires when the user presses the volume up button.
        //If you need to override the default volume up behavior you can register an event listener for the volumeupbutton event.
        document.addEventListener("volumeupbutton", DeviceButtonsController.onVolumeUpKeyDown, false);

        NetworkController.getNetworkInfoAndTryLoadMap();
    }
};
 
app.initialize();
