/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


//cordova-plugin-file
//https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/index.html
//https://github.com/apache/cordova-plugin-file#where-to-store-files
//https://www.neontribe.co.uk/cordova-file-plugin-examples/
//https://www.tutorialspoint.com/cordova/cordova_file_system.htm

//contacts
//https://cordova.apache.org/docs/en/deprecated.html
//cordova plugin add cordova-plugin-contacts
//https://www.tutorialspoint.com/cordova/cordova_contacts.htm
//https://www.raymondcamden.com/2014/07/09/Cordova-Plugin-update-and-new-Contacts-demo/

//geolocation
//https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html
//sudo cordova plugin add cordova-plugin-geolocation

//SMS
//https://www.npmjs.com/package/cordova-plugin-sms
//sudo cordova plugin add cordova-plugin-sms




function onDeviceReady() {
    console.log(navigator.camera);
}

var app = {

//"###> this.dataDirectory=cordova.file.dataDirectory=file:///data/user/0/br.com.teste/files/", source: file:///android_asset/www/js/index.js (34)
//"###> this.documentsDirectory = cordova.file.documentsDirectory=null", source: file:///android_asset/www/js/index.js (38)
//"###>this.externalDataDirectory=cordova.file.externalDataDirectory=file:///storage/emulated/0/Android/data/br.com.teste/files/", source: file:///android_asset/www/js/index.js (43)
//"###>this.applicationDirectory = cordova.file.applicationDirectory=file:///android_asset/", source: file:///android_asset/www/js/index.js (47)
//"###>this.applicationStorageDirectory = cordova.file.applicationStorageDirectory=file:///data/user/0/br.com.teste/", source: file:///android_asset/www/js/index.js (51)
//"###>this.cacheDirectory = cordova.file.cacheDirectory=file:///data/user/0/br.com.teste/cache/", source: file:///android_asset/www/js/index.js (58)
//"###>this.externalCacheDirectory = cordova.file.externalCacheDirectory=file:///storage/emulated/0/Android/data/br.com.teste/cache/", source: file:///android_asset/www/js/index.js (62)
//"###> this.externalApplicationStorageDirectory = cordova.file.externalApplicationStorageDirectory=file:///storage/emulated/0/Android/data/br.com.teste/", source: file:///android_asset/www/js/index.js (66)
//"###> this.externalRootDirectory = cordova.file.externalRootDirectory = file:///storage/emulated/0/", source: file:///android_asset/www/js/index.js (70)
//"###onDeviceReadyHandler: function() {...", source: file:///android_asset/www/js/index.js (261)
//"###onBatteryStatus : Status da bateria 91%", source: file:///android_asset/www/js/index.js (205)
//"###--------------------", source: file:///android_asset/www/js/index.js (219)
//###onRequestFileSystemSuccess : function(fileSystem){...", source: file:///android_asset/www/js/index.js (220)


    setAppAttributes:function(){
        //obtido atraves do onRequestFileSystemSuccess callback da funcao window.requestFileSystem
        this.fileSystem=null;
        console.log("###> this.fileSystem=");

        //Read-only directory where the application is installed. (iOS, Android, BlackBerry 10, OSX, windows)
        this.appDir=cordova.file.applicationDirectory;
        
        //Persistent and private data storage within the application's sandbox using internal memory
        //cordova.file.dataDirectory=file:///data/user/0/br.com.teste/files/
        this.dataDirectory=cordova.file.dataDirectory;
        console.log("###> this.dataDirectory=cordova.file.dataDirectory="+this.dataDirectory);
        
        //documentsDirectory
        //cordova.file.documentsDirectory retorna null
        this.documentsDirectory = cordova.file.documentsDirectory;
        console.log("###> this.documentsDirectory = cordova.file.documentsDirectory="+this.documentsDirectory);
        
        //(on Android, if you need to use external memory,
        //Where to put app-specific data files on external storage. (Android)
        //cordova.file.externalDataDirectory=file:///storage/emulated/0/Android/data/br.com.teste/files/
        this.externalDataDirectory = cordova.file.externalDataDirectory;
        console.log("###>this.externalDataDirectory=cordova.file.externalDataDirectory="+this.externalDataDirectory);
        
        //Read-only directory where the application is installed.
        //this.applicationDirectory = cordova.file.applicationDirectory=file:///android_asset/
        this.applicationDirectory = cordova.file.applicationDirectory;
        console.log("###>this.applicationDirectory = cordova.file.applicationDirectory="+this.applicationDirectory);
        
        //Root directory of the application's sandbox
        //this.applicationStorageDirectory = cordova.file.applicationStorageDirectory=file:///data/user/0/br.com.teste/
        this.applicationStorageDirectory = cordova.file.applicationStorageDirectory;        
        console.log("###>this.applicationStorageDirectory = cordova.file.applicationStorageDirectory="+this.applicationStorageDirectory);
        
        //Directory for cached data files or any files that your app can re-create easily.
        //The OS may delete these files when the device runs low on storage,
        //nevertheless, apps should not rely on the OS to delete files in here.
        //(iOS, Android, BlackBerry 10, OSX, windows)
        //this.cacheDirectory = cordova.file.cacheDirectory=file:///data/user/0/br.com.teste/cache/
        this.cacheDirectory = cordova.file.cacheDirectory;        
        console.log("###>this.cacheDirectory = cordova.file.cacheDirectory="+this.cacheDirectory);
        
        //Application cache on external storage. (Android)
        //this.externalCacheDirectory = cordova.file.externalCacheDirectory=file:///storage/emulated/0/Android/data/br.com.teste/cache/"
        this.externalCacheDirectory = cordova.file.externalCacheDirectory;
        console.log("###>this.externalCacheDirectory = cordova.file.externalCacheDirectory="+this.externalCacheDirectory);
        
        //Application space on external storage. (Android)
        //this.externalApplicationStorageDirectory = cordova.file.externalApplicationStorageDirectory=file:///storage/emulated/0/Android/data/br.com.teste/"
        this.externalApplicationStorageDirectory = cordova.file.externalApplicationStorageDirectory;
        console.log("###> this.externalApplicationStorageDirectory = cordova.file.externalApplicationStorageDirectory="+this.externalApplicationStorageDirectory);
        
        //External storage (SD card) root. (Android, BlackBerry 10)
        //this.externalRootDirectory = cordova.file.externalRootDirectory = file:///storage/emulated/0/
        this.externalRootDirectory = cordova.file.externalRootDirectory;
        console.log("###> this.externalRootDirectory = cordova.file.externalRootDirectory = "+this.externalRootDirectory);
    },





    
    // Application Constructor
    initialize: function() {
	console.log("###initialize: function() {...");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);	
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
	console.log("###onDeviceReady: function() {...");
        this.setAppAttributes();
        this.onDeviceReadyHandler();

	//seta funcao this.onClickBtnShowCamera como listener do evento click do bthShowCamera
	document.getElementById("btnShowCamera").addEventListener(
	    "click", this.onClickBtnShowCamera.bind(this), false);

	document.getElementById("btnPickContatcts").addEventListener(
	    "click", this.onClickBtnPickContatcts.bind(this), false);

	document.getElementById("btnPickContatctsForSMS").addEventListener(
	    "click", this.onClickBtnPickContatctsForSMS.bind(this), false);

	document.getElementById("btnGeoCurrLocationForSMS").addEventListener(
	    "click", this.getGeoLocationCurrentPosition4SMS.bind(this), false);

	document.getElementById("enviaSMS").addEventListener(
	    "click", this.enviaSMS.bind(this), false);

        
        
	// --- seta listeners para bateria
	window.addEventListener("batterycritical", this.onBatteryCritical, false);
	window.addEventListener("batterylow", this.onBatteryLow, false);
	//dispara a cada 1 por cento de mudanca no nivel da baterial
	window.addEventListener("batterystatus", this.onBatteryStatus, false);
        
        //Geolocation
        this.getGeoLocationCurrentPosition();
        
    },


    //CAMERA
    onClickBtnShowCamera : function(){
	let CameraOptions={
	    quality: 100,
	    destinationType: navigator.camera.DestinationType.FILE_URI,
	    sourceType: navigator.camera.PictureSourceType.CAMERA,
	    encodingType: navigator.camera.EncodingType.JPEG,
	    cameraDirection: 2,
	    saveToPhotoAlbum: true
	};
 
	navigator.camera.getPicture(
	    this.CameraGetPictureSuccess,
	    this.CameraGetPictureFail,
	    CameraOptions
	);
    },

    CameraGetPictureSuccess:function(imageURI) {
	console.log("###CameraGetPictureSuccess:function(imageURI) {...");
	console.log("###imageURI="+imageURI)//file:///storage/emulated/0/Pictures/IMG_20180411_020250.jpg
        var image = document.getElementById('imagem');
        image.style.display = 'block';
        image.src = imageURI;
	this.app.CameraGetPictureSucess_PersistImg(imageURI);
    },

    //https://cordova.apache.org/docs/en/2.0.0/cordova/file/fileentry/fileentry.html
    CameraGetPictureSucess_PersistImg:function(imageURI){
        console.log("###>>>CameraGetPictureSucess_PersistImg:function(imageURI){...");
        console.log("###this.dataDirectory="+this.dataDirectory);
	
        console.log("###imageURI="+imageURI);
        
	//from: https://www.joshmorony.com/store-camera-photos-permanently-using-phonegap-ionic-ngcordova/
	//Grab the file name of the photo in the temporary directory
	//var currentName = imageURI.replace(/^.*[\\\/]/, '');
    
        window.resolveLocalFileSystemURL(imageURI, function(fileEntry){
            console.log("###>>> >>>>window.resolveLocalFileSystemURL(imageURI, function(fileEntry){...");
            console.log("###Object.getOwnPropertyNames(fileEntry)");
            console.log("###"+Object.getOwnPropertyNames(fileEntry));            
        },function(error){
            console.log("### window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function(directory){... " + error);
        });// window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(directory){       
    },
                                         
    
    CameraGetPictureFail:function(message) {
        console.log('###Failed because: ' + message);
    },


    
    //BATTERY    
    onBatteryStatus: function(status) {
	console.log("###onBatteryStatus : Status da bateria " + status.level + "%");
    },
    onBatteryCritical : function(status){
	alert("###onBatteryCritical : Nivel Critivo da Bateria " + status.level + "%");
    },
    onBatteryLow : function(status){
	alert("###onBatteryLow : function(status){...-> Nivel Baterial Baixo " + status.level + "%");
    },




    //FILESYSTEM
    onRequestFileSystemSuccess : function(fileSystem){
        console.log("###--------------------");
	console.log("###onRequestFileSystemSuccess : function(fileSystem){...");
        this.app.fileSystem = fileSystem;
        this.app.dataDirectory = cordova.file.dataDirectory
    },
    onRequestFileSystemFail : function(fileSystem){
	console.log("###onFileSystemFail : function(fileSystem){...");
        console.log("###fileSystem:"+fileSystem);
        this.fileSystem = null;
    },
    onResolveFileSystemURISuccess : function(fileEntry) {
	console.log("### onResolveFileSystemURISuccess : function(fileEntry) {...");
        console.log("### fileEntry:"+fileEntry);
        console.dir(fileEntry);
    },
    onResolveFileSystemURIFail : function(fileEntry){
	console.log("###onResolveFileSystemURIFail : function(fileEntry){...");
    },

    createFile: function() {
	var type = window.TEMPORARY;
	var size = 5*1024*1024;
	window.requestFileSystem(
	    type, size, createFileSuccessCallback, errorCallback);	
    },

    createFileSuccessCallback: function(fs) {
	fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
	    alert('File creation successfull!')
	}, errorCallback);
    },
    
    createFileErrorCallback: function(error) {
      alert("ERROR: " + error.code)
   },
	


    
    
    // Update DOM on a Received Event
    onDeviceReadyHandler: function() {
	console.log("###onDeviceReadyHandler: function() {...");
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    },


    //Contacts (not io quirks treatnebt
    onClickBtnPickContatcts:function(){
        navigator.contacts.pickContact(function(contact){
            console.log('###&&&The following contact has been selected:' + JSON.stringify(contact));
            var s = "";
            s += "<h2>"+contact.displayName+"</h2>";

            if(contact.emails && contact.emails.length) {
                s+= "Email: "+contact.emails[0].value+"<br/>";
            }
            
            if(contact.phoneNumbers && contact.phoneNumbers.length) {
                s+= "Phone: "+contact.phoneNumbers[0].value+"<br/>";
            }
            
            if(contact.photos && contact.photos.length) {
                s+= "<p><img src='"+contact.photos[0].value+"'></p>";
            }
            document.querySelector("#contatoSelecionado").innerHTML=s;
            
        },function(err){
            console.log('Error: ' + err);
        });
    },

    onClickBtnPickContatctsForSMS:function(){
        navigator.contacts.pickContact(function(contact){
            var cDisplayName = contact.displayName;
            var cNumTel="Contato S/ Num Tel";
            if(contact.phoneNumbers && contact.phoneNumbers.length) {
                cNumTel = contact.phoneNumbers[0].value;
            }
            document.getElementById('number4sms').value=cNumTel;
            document.getElementById('msg4sms').innerHTML=cDisplayName;
            
        },function(err){
            console.log('Error: ' + err);
        });
    },


    //geolocation
    geoLocationOptions:{
        maximumAge: 3000,//3segundos, aceita pos do cache
        timeout: 5000,
        enableHighAccuracy: true
    },
    getGeoLocationCurrentPosition:function(){
        console.log("###geoCurrentPosition:function(){...");
        navigator.geolocation.getCurrentPosition(
            this.onGeolocationCurrentPositionSuccess,
            this.onGeolocationCurrentPositionFail,
            this.geoLocationOptions);
    },
    getGeoLocationCurrentPosition4SMS:function(){
        console.log("###geoCurrentPosition4SMS:function(){...");
        navigator.geolocation.getCurrentPosition(
            this.onGeolocationCurrentPosition4SMSSuccess,
            this.onGeolocationCurrentPositionFail,
            this.geoLocationOptions);
    },
    onGeolocationCurrentPosition4SMSSuccess:function(position){
        console.log("###onGeolocationCurrentPosition4SMSSuccess:function(position){...");
        var element = document.getElementById('msg4sms');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
            'Longitude: ' + position.coords.longitude     + '<br />' +
            '<hr />'      + element.innerHTML;
    },
    onGeolocationCurrentPositionSuccess:function(position){
        console.log("###onGeolocationCurrentPositionSuccess:function(position){...");
        console.log(position);
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
            'Longitude: ' + position.coords.longitude     + '<br />' +
            '<hr />'      + element.innerHTML;
    },
    onGeolocationCurrentPositionFail:function(error){
        console.log("###onGeolocationCurrentPositionFail:function(error){...");
        console.log(error);
    },
    
    //SMS
    enviaSMS:function(){
        Object.getOwnPropertyNames(SMS);
        console.log("###<><>enviaSMS:function(){...");
        var numTel = document.getElementById('number4sms').value;
        var msg = document.getElementById('msg4sms').value;
        Object.getOwnPropertyNames(SMS);
        SMS.sendSMS(numTel, msg, this.onSendSMSSuccess, this.onSendSMSFailure);
        //numTel pode ser um array de numeros
    },
    onSendSMSSuccess:function(x){
        Object.getOwnPropertyNames(x);
    },
    onSendSMSFailure:function(error){
        Object.getOwnPropertyNames(error);        
    }
};

app.initialize();
