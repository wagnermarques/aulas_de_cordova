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


function onDeviceReady() {
    console.log(navigator.camera);
}

var app = {
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
        this.onDeviceReadyHandler();

	//seta funcao this.onClickBtnShowCamera como listener do evento click do bthShowCamera
	document.getElementById("btnShowCamera").addEventListener(
	    "click", this.onClickBtnShowCamera.bind(this), false);


	// --- seta listeners para bateria
	window.addEventListener("batterycritical", this.onBatteryCritical.bind(this), false);
	window.addEventListener("batterylow", this.onBatteryLow.bind(this), false);
	//dispara a cada 1 por cento de mudanca no nivel da baterial
	window.addEventListener("batterystatus", this.onBatteryStatus, false);


	//FILESYSYEM
	window.requestFileSystem(
	    LocalFileSystem.PERSISTENT, 0, this.onFileSystemSuccess, this.onFileSystemFail);
        window.resolveLocalFileSystemURI("file:///example.txt", this.onResolveFileSystemURISuccess, );	
    },

    //CAMERA
    onClickBtnShowCamera : function(){
	let CameraOptions={
	    quality: 100,
	    destinationType: navigator.camera.DestinationType.FILE_URI,
	    sourceType: navigator.camera.PictureSourceType.CAMERA,
	    encodingType: navigator.camera.EncodingType.JPEG,
	    cameraDirection: 1,
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
	console.log("###imageURI="+imageURI)
        var image = document.getElementById('imagem');
        image.style.display = 'block';
        image.src = imageURI;
	
    },

    //https://cordova.apache.org/docs/en/2.0.0/cordova/file/fileentry/fileentry.html
    CameraGetPictureSucess_PersistImg:function(fileUri){
	console.log("###CameraGetPictureSucess_PersistImg:function(fileUri){...");
	//from: https://www.joshmorony.com/store-camera-photos-permanently-using-phonegap-ionic-ngcordova/
	//Grab the file name of the photo in the temporary directory
	var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
	//Create a new name for the photo
	var d = new Date(),
	    n = d.getTime(),
	    newFileName = d + ".jpg";
	console.log("###FileNameToPersist="+newFileName);
	console.log("###cordova.file.tempDirectory="+cordova.file.tempDirectory);
	console.log("###currentName="+currentName);
	console.log("###cordova.file.dataDirectory="+cordova.file.dataDirectory);
	console.log("###newFileName="+newFileName);
	//Move the file to permanent storage
	fileUri.moveFile(
	    cordova.file.tempDirectory, currentName,
	    cordova.file.dataDirectory, newFileName).then(function(success){
		console.log("###onFileMoveSuccess:"+success);
		//success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
		//createPhoto(success.nativeURL);
	    });
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
    onFileSystemSuccess : function(fileSystem){
	console.log("###onFileSystemSuccess : function(fileSystem){...");
    },
    onFileSystemFail : function(fileSystem){
	console.log("###onFileSystemFail : function(fileSystem){...");
    },
    onResolveFileSystemURISuccess : function(fileEntry) {
	console.log("### onResolveFileSystemURISuccess : function(fileEntry) {...");
        console.log(fileEntry.name);
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

    }
};

app.initialize();
