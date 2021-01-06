let mysql = require("mysql");

let bdd = mysql.createConnection({
    host : "localhost",
    user : 'yannis',
    password : 'root',
    database : 'nodejs'
})

bdd.connect();

module.exports = bdd;