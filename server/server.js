//? Module for SQL
const mysql = require('mysql');
//?express  
const express = require('express')
const app = express()
app.use(express.json())
//? port if the conexion 
const port = 3000
//? uso cors
const cors = require('cors')
app.use(cors())
//? where is runing my server IN PORT 3000
const fileUpload = require('express-fileupload')
app.use(fileUpload());

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

// ==================================================================================================================
app.post('/login', (req, res) => { 
      const name = req.body.name;
      const password = req.body.password;        

      con.query("SELECT * FROM login WHERE usuario =  ? AND contrasena = ? ", [name,password],  (err,result) => {
             if (result.length > 0 ) { 
                   //?inicia sesion              
                  res.send(result);
                  
            }else if(name == '' && password == ''){
                  res.send('CAMPOS VACIOS');
                   
            }else {
                  res.send('USUARIO O CONTRASEÑA NO SON VALIDOSS');

             }
      })
  
})
app.get('/getCategories', (req, res) => {
      con.query('SELECT * FROM caregorias', (err,result)=> {
         if (result.length > 0) {
            res.send(result);
         }else{
            res.send('No se encontraron categorias');
         }         
      }) 

})
app.post('/upload',(req,res) => {     
       
      var EDFile = req.files.file ;
      EDFile.mv(`../assets/img/products/${EDFile.name}`,err => {
          if(err) return res.send({ message : err })  
          return res.send('File upload')
      })
       
  
})
app.get('/getProducts', (req, res) => {
       
      con.query('SELECT * FROM  productos', (err,result)=> {
         if (result.length > 0) {
            res.send(result);
         }else{
            res.send('No se encontraron productos');
         }         
      }) 

})
app.post('/insertProduct', (req, res) => {
       
      var values = [
            req.body.name,
            req.body.description,
            req.body.nameImg,
            req.body.price,
            req.body.category,
            req.body.status,
            req.body.star
      ]
      con.query('INSERT INTO productos (nombre,descripcion,routeImg,precio,categoria,estado,estrellas) VALUES(?)',[values], (err,result)=> {
         if (err) {
               res.send('No se insertaron los productos');
           }else{
               res.send('Producto insertado con exito');
         }              
      })
})



app.get('/editProduct', (req, res) => {
      res.send('editando product');

})
app.get('/deleteProduct', (req, res) => {
      res.send('borarando product');

})