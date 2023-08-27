const express = require('express') 
const mysql = require('mysql')
const app = express();
 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'intimo'
});

app.listen(3001, () => console.log('hola soy el servidor 3001'))

app.post('/start', (req, res) => {
  const sql = "SELECT * FROM Login WHERE usuario = ? AND contrasena = ?";
  const values = [
    req.body.name,
    req.body.password
  ];
  connection.query(sql, values);
});
 
  