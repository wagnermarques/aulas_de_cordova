let appUtils = (function(){

    let r = {};
    
    //HELPERS FUNCTIONS
    //https://stackoverflow.com/questions/16839698/jquery-getscript-alternative-in-native-javascript/16839763#16839763
    r.carregaScript: function (scriptSrc){
        alert("carregaScript: function (scriptSrc){...");
        alert(scriptSrc);
        var scriptElem = document.createElement('script');
        scriptElem.type = "text/javascript";
        scriptElem.src = scriptSrc;
        scriptElem.async = true;
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    
    return r;
})()
