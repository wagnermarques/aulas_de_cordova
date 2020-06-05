console.log("[firestore-features.js] --> firestore-features.js loaded sucessfully!!!");

class FirestoreFeatures  {

    /* passe true ou false para enablePersistence
       true habilita cache para dados off line
       false, que o padrao, mantem desabilitado
       https://firebase.google.com/docs/firestore/manage-data/enable-offline?authuser=0
    */
    constructor(firebaseObject,enablePersistence){
        console.log("[firestore-features.js] --> class FirestoreFeatures{... constructor(firebaseObject){");
        
        this._firebase = firebaseObject;
        this._db = this._firebase.firestore();
      
        //-> -> -> -> persistent cache
        // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
        // for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
        // to disable clean-up.
        this._db.settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

        if (enablePersistence === true) this._db.enablePersistence()
            .catch(function(err) {
                if (err.code == 'failed-precondition') {
                    alert(err.code)
                    // Multiple tabs open, persistence can only be enabled
                    // in one tab at a a time.
                    // ...
                } else if (err.code == 'unimplemented') {
                    alert(err.code);
                    // The current browser does not support all of the
                    // features required to enable persistence
                    // ...
                }
            });
    }


    
    
    recuperaColecao(nomeDaColecao){
        this._db.collection(nomeDaColecao).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(`${doc.id} => ${doc.data()}`);
                console.log(doc.id +" => "+ doc.data());
            });
        })
    }
    
    /*
      O Cloud Firestore armazena dados nos Documentos que são armazenados nas Coleções. O Cloud Firestore cria coleções e documentos de modo implícito na primeira vez que você adiciona dados ao documento. Não é necessário criar coleções ou documentos explicitamente.
     */
    criaColecao(nomeDaColecao, hashObject){
        this._db.collection(nomeDaColecao).add(hashObject)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            })
    }
}
