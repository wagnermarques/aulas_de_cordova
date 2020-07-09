let DeviceDiagnostic = {


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
}
