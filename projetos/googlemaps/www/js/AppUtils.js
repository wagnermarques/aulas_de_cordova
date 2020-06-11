let appUtils = {

     carregaScript : function (scriptSrc){
        var scriptElem = document.createElement('script');
        scriptElem.type = "text/javascript";
        scriptElem.src = scriptSrc;
        scriptElem.async = true;
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
}
