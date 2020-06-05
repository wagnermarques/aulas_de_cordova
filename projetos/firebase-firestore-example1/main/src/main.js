//the constructor creates firestore db instance
//thid._db = this._firebase.firestore();
console.dir(firebase);
const db = new FirestoreFeatures(firebase);

Ada = {
    first: "Ada",
    last: "Lovelace",
    born: 1815
};

db.criaColecao("GreatDevs",Ada);
db.recuperaColecao("GreatDevs");
