const maria = require('mysql');

const conn = maria.createConnection({
    host:'localhost',
    port:3333,
    user:'root1',
    password:'qwer1234',
    database:'test',
    dateStrings:'date'
});

module.exports = conn;