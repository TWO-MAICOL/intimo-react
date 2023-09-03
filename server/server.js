// Module for SQL
const mysql = require('mysql');
//express + node
const express = require('express')
const app = express()
// port if the conexion 
const port = 3000
// uso cors
const cors = require('cors')
app.use(cors())
// where is runing my server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// credentials y conexion a BD 
var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'intimo'
});
con.connect();
// consultas a mi API
app.get('/login', (req, res) => { 
  console.log(req.body.d);
  res.send(' tus datos son ');
  //  con.query("SELECT * FROM login ", (err,result) =>{
  //   if (result.length > 0) {
  //     res.send(result);

  //   }else{
  //     res.send(err);

  //   }
  //  })  

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