const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASS,
    database:dbConfig.DB_NAME,
});

connection.connect((error)=>{
    if(error) {
        connection.on('error', function(err) {
            console.log("[mysql error]",err);
        })
    }
    console.log('Successfully connected to the Database !!!')
})

module.exports =  connection;