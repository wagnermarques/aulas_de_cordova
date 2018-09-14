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
var app = {
    // Application Constructor
    map:undefined,
    
    initialize: function() {
        console.log("initialize: function() {...");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //in order to see console.log(...
        //with adb logcat: lets do: cordova plugin add cordova-plugin-console
        //in order to visualize  console.log in log cat: adb logcat -s "chromium"
        //adb logcat  -s "chromium":I
        //cordova run android && adb logcat  -s "chromium":I
        //more about adb logcat: http://adbshell.com/commands/adb-logcat
        //console.log("#####onDeviceReady: function() {...");
        //window.document.getElementById("networkState").innerHTML="onDeviceReady: function() {...";
        //online starta quando o dispositivo que nao estava conectado na internet
        //passa a ter uma conexao
        //neste caso connection.type deixa de ser NONE
        window.inicializaMapa();

        document.addEventListener("online", this.onDeviceIsOnline.bind(this), false);
        document.addEventListener("offline",this.onDeviceIsOffline.bind(this), false);
        //if(networkState !== Connection.NONE) this.onDeviceReady();;
    },

    //este metodo roda quando o o dispositivo fica online
    //https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-network-information/index.html
    onDeviceIsOnline : function(){
        //AQUI A GENTE CONFIGURA E USA O GOOGLE MAPS
        console.log("#####onDeviceIsOnline : function(){...");
        //alert("#####onDeviceIsOnline : function(){...");
        //window.document.getElementById("networkState").innerHTML="onDeviceIsOnline : function(){...";
        // Handle the online event
        var networkState = navigator.connection.type;
        if (networkState !== Connection.NONE){
            console.log("#####if (networkState !== Connection.NONE){... returns TRUE");
            //now we have internet, lets prepare to load google maps api
            window.loadGoogleMaps();            
        }
        //this.map = cria_mapa();
    },

    //este metodo roda quando o nosso apliativa fica em segundo plano
    //e quando e ativado de novo roda esse on resume
    onDeviceIsOffline : function(){
        //AQUI A GENTE AVISA O USUÁRIO QUE O GOOGLE MAPS ESTA INDISPONIVEL POR FALTA DE INTERNET
        console.log("##### onDeviceIsOffline : function(){...");
        //alert("##### onDeviceIsOffline : function(){...");
        //window.document.getElementById("networkState").innerHTML="dispositivo ficou off line";
        window.gMapsLoaded = false;
        window.map = null;
        alert("Sem Conexao com a internet");
    }
};

app.initialize();
