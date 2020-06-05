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

/*
 * var app é uma variável que vai representar pra nos o contexto do nosso aplicativo
 * ou seja o contexto do app
 * Entao nosso app terá algumas funcoes, e entao, essas funcoes estarao definidas
 * dentro desse objeto app 
*/
var app = {

    // Application Constructor
    // Se vc for ate o final desse arquivo vc vai ver que ao ser carregado sera executado
    // a chamada desse metodo
    // app.initialize();
    // Entao, pro nosso app funcionar, ele tem que ser inicializado
    // A inicializacao do app consiste em adicionar o evento 'deviceready'
    // O professor vai explicar isso em aula
    // dentro do nosso codigo, desse metodo inicializew
    // tem esse trecho
    // this.onDeviceReady.bind(this)
    // o this he o app
    // on deviceReady he o metodo desse nosso app
    // .bind recebe this pra forcar que o metodo onDeviceReady deve rodar dentro do contexto do nosso app
    // Essa he uma questao da linguagem javascript.
    // com esse bind, um this dentro do metodo onDeviceReady representara tambem nosso app
    // pense que esse bind faz o nosso metodo onDeviceReady pertencer sempre ao nosso app
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    // Esse metodo vai rodar quando o device estiver pronto
    // se o professor esquecer, lembre ele de explicar o que e esse evento
    // deviceReady
    onDeviceReady: function() {
        var btnTirarFoto = document.getElementById("btnTirarFoto");
        btnTirarFoto.addEventListener('click',this.tirarFoto);
        this.pictureSource=navigator.camera.PictureSourceType;
        this.destinationType=navigator.camera.DestinationType;
        console.dir(this.pictureSource);
        console.dir(this.destinationType);
    },

    //funcao que efetivamente tira a foto
    tirarFoto: function(){
        if (!navigator.camera) {
            alert("Plugin Cordova da Camera nao Instalado", "Erro!!!");
            return;
        }

        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI,
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };

        let options2 = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        //esse objeto navigator
        //he criado pelo plugin
        //ele tem, por sua vez, um atributo com objeto camera
        //que he utilizado para obter a foto
        navigator.camera.getPicture(
            function(imgData) {
                //alert(imgData);
                var imgHtmlTag = document.getElementById("imgHtmlTag");
                alert(imgHtmlTag);
                imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
            },
            function(e) {
                alert(e);
                alert('Plugin Camera Instalado, mas getPicture falhou', 'Error');
            }, options2);

        //nao faz sentido fazer algo aqui....
        return false;     
    }            
};

app.initialize();
