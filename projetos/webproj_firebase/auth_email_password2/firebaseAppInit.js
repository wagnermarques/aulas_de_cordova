//https://firebase.google.com/docs/web/setup?hl=pt-br
// Initialize Firebase

alert("App javascript de controle de login com firebase");

function onloadFunction(){
    firebase.initializeApp(config);
}

function signup(){

    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    
    if(email.length == 0) {
        alert ("digite um email");
        return false;
    }
    
    if(senha.length == 0){
        alert ("digite um uma senha");
        return false;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode) alert(errorCode);
        if(errorMessage) alert(errorMessage);
    };)
}
