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
    console.log("function login(){...");
    try{

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
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(function(user){
            console.log("firebase.auth().signInWithEmailAndPassword(email, senha).then(function(user){...");
            showCurrentUser();//update lbUserLoggedIn label

        }).catch(function(error) {
            console.log("firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {...");
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if (errorCode === 'auth/wrong-password') {
                alert('Senha errada!');
            } else {
                alert(errorMessage);
            }           
        });
                
    }catch(e){
        console.log(e);
    }
}

function mudarSenha(){

    var email = document.getElementById('email').value;
    
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Pedido de alteracao de senha enviado!');
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/invalid-email') {
          alert("email informado invalido");
        } else if (errorCode == 'auth/user-not-found') {
          alert("email nao encontrado");
        }
      });
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
    console.log("function showCurrentUser(){...");
    document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
}

