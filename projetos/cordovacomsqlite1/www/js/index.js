var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);
        document.getElementById("btnListar").addEventListener("click",app.listar);
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        db = window.sqlitePlugin.openDatabase({
            name: 'my.db',
            location: 'default',            
            androidDatabaseProvider: 'system'
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (login, pass)');
        }, function(error) {
            console.log('Transaction ERROR: ' + error.message);
        }, function() {
            alert('Banco e Tabela usuarios criados com sucesso!!!');
        });
    },

    inserir: function(){
        let login = document.getElementById("txtLogin").value;
        let pass = document.getElementById("txtPassword").value;

        db.transaction(function(tx) {
            tx.executeSql('INSERT INTO usuarios VALUES (?,?)', [login, pass]);
        }, function(error) {
            alert('Erro durante a transacao com o banco: ' + error.message);
        }, function() {
            alert('Insercao realizada com sucesso!!!');
        });
    },
    
    listar: function(){
        db.executeSql(
            'SELECT login AS uLoginName, pass AS uPassword FROM usuarios', [], function(rs) {
                alert(JSON.stringify(rs));
                alert(rs.rows.length);
                let i = 0;
                for(i = 0; i < rs.rows.length; i++){
                    alert("item "+i);
                    let recordItem = rs.rows.item(i);
                    alert(JSON.stringify(recordItem));
                }                
            //alert('Record count (expected to be 2): ' + rs.rows.item(0).uLoginName);
        }, function(error) {
            alert('Erro no SELECT: ' + error.message);
        });
    }
};

app.initialize();
