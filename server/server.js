//? Module for SQL
const mysql = require('mysql');
//?express  
const express = require('express')
const app = express()
app.use(express.json())
// ?port if the conexion 
const port = 3000
//? uso cors
const cors = require('cors')
app.use(cors())
//? where is runing my server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//? credentials y conexion a BD 
var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'intimo'
});
con.connect();
//? consultas a mi API
app.post('/login', (req, res) => { 
      const name = req.body.name;
      const password = req.body.password;        

      con.query("SELECT * FROM login WHERE usuario =  ? AND contrasena = ? ", [name,password],  (err,result) => {
             if (result.length > 0 ) { 
                  res.send(result);
              //?inicia sesion
              res.redirect('  ');
                
            }else if(name == '' && password == ''){
                  res.send('CAMPOS VACIOS');
                   
            }else {
                  res.send('USUARIO O CONTRASEÑA NO SON VALIDOSS');

             }
      })
  
})
app.get('/getProducts', (req, res) => {
      res.send('buscando product');

})
app.post('/createProduct', (req, res) => {
      res.send('creando product');

})
app.get('/editProduct', (req, res) => {
      res.send('editando product');

})
app.get('/deleteProduct', (req, res) => {
      res.send('borarando product');

})