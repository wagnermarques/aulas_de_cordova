let ActivityLifeCicleController = {

    //ANDROID APP LIFE CICLE EVENTS
    onResume: function () {
        console.log("[ActivityLifeCicleController] function onResume () {...");
        /*
          Poderiamos ficar tentados a colocar o loadMapsApi aqui no onResume, para que todas as vezes
          que nosso app voltar para o primeiro plano do usuario o android rodando esse nosso onResume
          carregariamos de novo a api do google maps... MAS NAO PRECISA FAZER ISSO, NOS MEUS ESTUDOS AQUI 
          TOMEI ESSE ERRO....
          07-08 19:19:04.128 19150 19150 I chromium: [INFO:CONSOLE(146)] 
          "You have included the Google Maps JavaScript API multiple times on this page. 
          This may cause unexpected errors.", 
          source: https://maps.googleapis.com/maps/api/js?key=SUACHAVE (146)
          A GENTE CARREGOU ESSA API ASSIM QUE DETECTAMOS QUE O DISPOSITIVO DO NOSSO USUARIO ESTA 
          CONECTADO COM UMA INTERNET E A GEOLOCALIZACAO DO DISPOSTIVO NAO FALHOU
         */
        //app.loadMapsApi();
    },

    onPause: function () {
        console.log("[ActivityLifeCicleController] function onPause () {...");
    }

}
