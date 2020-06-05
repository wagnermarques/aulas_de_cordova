let gMapsGeoLoc = (function(){

    r = {};
    r.LatLngDeviceCurrent = {lat: undefined, lng: undefined};
    r.LatLngCompany = {lat: undefined, lng: undefined};
    
    r.geocoder = new google.maps.Geocoder();

    return r;
})();
