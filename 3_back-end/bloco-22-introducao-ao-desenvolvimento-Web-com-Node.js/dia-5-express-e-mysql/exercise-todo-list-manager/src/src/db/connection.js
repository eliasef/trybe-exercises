const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    // se fosse com docker, o host fica nome do db (quando for disponibilizar pro mundo, na aplicação real)
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'todolistdb',
});

module.exports = connection

// aq eu faço a conexão com o banco de dados mysql, o server vai rodar a api e o mysql!!!

// .env ? tendi nada rsrsrs