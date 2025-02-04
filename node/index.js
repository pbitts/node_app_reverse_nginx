const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'nodedb'
};
const connection = mysql.createConnection(config);
// Insere um novo nome no banco
const sql = `INSERT INTO people(name) values('Outro Nome aqui')`;
connection.query(sql);
// Rota principal: retorna os nomes cadastrados
app.get('/', (req, res) => {
   connection.query('SELECT name FROM people', (err, results) => {
       if (err) {
           res.send('<h1>Erro ao buscar nomes</h1>');
           return;
       }
       let namesList = '<h1>Full Cycle Rocks!</h1><ul>';
       results.forEach(row => {
           namesList += `<li>${row.name}</li>`;
       });
       namesList += '</ul>';
       res.send(namesList);
   });
});
app.listen(port, () => {
   console.log('Rodando na porta ' + port);
});