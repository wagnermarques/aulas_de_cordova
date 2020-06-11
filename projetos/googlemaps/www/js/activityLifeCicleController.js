let activityLifeCicleController = {

    //ANDROID APP LIFE CICLE EVENTS
    onResume: function () {
        console.log("function onResume () {...");
        //o mapa ja tinha sido carregado
        //talvez um update apenas se necessario
        //app.loadMapsApi();
    },

    onPause: function () {
        console.log("function onPause () {...");
        //se a gente fizer algo aqui no onpaulse
        //temos que considerar o ajuste disso no onResume
        //app.loadMapsApi();
    }

}
