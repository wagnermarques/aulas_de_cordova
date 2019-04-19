
function currentUser(){
    try{
        let u = firebase.auth().currentUser;
        return u.email;
    }catch(e){
        return e;
    }
    
}

function signup(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    alert("About to singup: email-> "+email+", senha->"+senha);
    
    if(email.length == 0) {
        alert ("digite um email");
        return false;
    }
    
    if(senha.length == 0){
        alert ("digite um uma senha");
        return false;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode) alert(errorCode);
        if(errorMessage) alert(errorMessage);
    })

    showCurrentUser();//update lbUserLoggedIn label
}

function login(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    alert("About to login: email-> "+email+", senha->"+senha);
    
    if(email.length == 0) {
        alert ("digite um email");
        return false;
    }
    
    if(senha.length == 0){
        alert ("digite um uma senha");
        return false;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            alert('Senha errada!');
        } else {
            alert(errorMessage);
        }
    });

    showCurrentUser();//update lbUserLoggedIn label
}



function logout(){
    try{
        firebase.auth().signOut();
        showCurrentUser();//update lbUserLoggedIn label
    }catch(e){
        alert(e);
    }
}

function showCurrentUser(){
    document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
}




