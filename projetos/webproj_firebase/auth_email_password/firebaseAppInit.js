//https://firebase.google.com/docs/web/setup?hl=pt-br
// Initialize Firebase

function onLoadFunction(){
    firebase.initializeApp(fbConfig);
    showCurrentUser();//update lbUserLoggedIn label
}

