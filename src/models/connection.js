const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '03394579',
    database: 'bot_whatsapp'
})


module.exports = connection ;