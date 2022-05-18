
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("function onDeviceReady() {...");

    let configuraBanco = {
        name: 'meusqlite',
        location: 'default',
        androidDatabaseProvider: 'system'
    };

    let banco = window.sqlitePlugin.openDatabase(configuraBanco);
    
    console.log("###banco...");
    console.log(banco);

    banco.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
        tx.executeSql('INSERT INTO DemoTable VALUES (?1,?2)', ['Alice', 101]);
        tx.executeSql('INSERT INTO DemoTable VALUES (?1,?2)', ['Betty', 202]);
      }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
      }, function() {
        console.log('Populated database OK');
      });

      banco.transaction(function(tx) {
        tx.executeSql('SELECT * FROM DemoTable', [], function(tx, rs) {
          for(let i=0; rs.rows.length; i++){
            console.log(rs.rows.item(i));
          }
          //console.log('#### Record count (expected to be 2): ' + rs.rows.item(0).mycount);
        }, function(tx, error) {
          console.log('SELECT error: ' + error.message);
        });
      });

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
