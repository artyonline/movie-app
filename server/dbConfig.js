const mysql = require('mysql2');

config = {
    host: 'localhost',
    user: 'root',
    password: 'Pwd@123',
    database: 'movie_db'
}
const connection = mysql.createConnection(config);

connection.connect(function(err){
    if (err){
        console.log('error connecting:' + err.stack);
    }
    console.log('connected successfully to DB.');
});

module.exports ={
    connection : mysql.createConnection(config),
    config : config
}