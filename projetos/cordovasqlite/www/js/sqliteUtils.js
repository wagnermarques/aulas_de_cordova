//https://github.com/litehelpers/Cordova-sqlite-storage#readme
var db = null;
var sqlCreateTableIfNotExists = "CREATE TABLE IF NOT EXISTS Locais (nome, end, descricao, lt, lgt);";
var sqlInsert = "INSERT INTO Locais VALUES (?,?,?,?,?)";

var local = {
    nome:"IPGG - Instituto Paulista de Geriatria e Gerontologia",
    end:"Praça Padre Aleixo Monteiro Mafra, 34 - São Miguel, São Paulo - SP",
    desc:"Instituto, antigo CRI Zona Leste",
    lt:-23.500662,
    lgt:-46.4359367
}

function openDatabase(){
    alert("function openDatabase(){..");
    console.log("function openDatabase(){...");
    db = window.sqlitePlugin.openDatabase({
        name: 'cordovasqlite3.db',
        location: 'default',
    });
}

function createTableIfNotExists(){
    console.log("function createTables(){...");

    db.transaction(function(tx) {
        tx.executeSql(sqlCreateTableIfNotExists);
    }, function(error) {
        alert('Erro durante a insercao dos registros: Transaction ERROR: ' + error.message);
        console.log('Erro durante a insercao dos registros: Transaction ERROR: ' + error.message);
    }, function() {
        alert('Registros Inseridos Com Sucesso');
        console.log('Registros Inseridos Com Sucesso');
    });
}

//Recebe um objeto com os mesmos fiedls da variavel local
function insertObject(localHashObject){
    console.log("function insertObject(localHashObject){...");
    db.transaction(function(tx) {
        tx.executeSql(sqlInsert, [local.nome, local.desc, local.end, local.lt, local.lgt]);
        tx.executeSql(sqlInsert, [local.nome, local.desc, local.end, local.lt, local.lgt]);
    }, function(error) {        
        console.log('Erro durante a insercao dos registros: Transaction ERROR: ' + error.message);
        alert('Erro durante a insercao dos registros: Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Registros Inseridos Com Sucesso');
        alert('Registros Inseridos Com Sucesso');
    });
    
}

function select(sql){
    console.log(">>>function select(sql){...");
    alert(">>>function select(sql){...");
    let rs;
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM Locais', [], function(tx, rs) {
            var i;
            var objetosRetornadosPeloBanco = [];
            console.log(">>>>");
            console.log(">>>> for(i == 0; i < "+rs.rows.length+"; i++){...");
            for(i = 0; i < rs.rows.length ; i++){
                console.log(">>> i="+i);
                console.log(">>>");
                console.log(rs.rows.item(i).nome);
            }
        }, function(tx, error) {
            console.log('SELECT error: ' + error.message);
            alert(error.message);
        });
    });
}
