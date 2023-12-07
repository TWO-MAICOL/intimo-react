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

//? API Watsapp of prueba. SEND MESSAGES
// import WhatsApp from 'whatsapp';

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
app.post('/addCategory', (req, res) => {
       
      var values = [
         req.body.category           
      ]
      con.query('INSERT INTO caregorias (nombre) VALUES(?)',[values], (err,result)=> {
            if(err){
                 res.send("No se cargo la categoria");       
            }else{
                  res.send("Categoria guardada correctamente");
            }                 
      })
        
} )
app.get('/getProductsPopular', (req, res) => {      

      con.query('SELECT * FROM  populares', (err,result)=> {
          if( err ){
            res.send("No se encontrarron productos porpulares ");           
          }else{
            res.send(result);    
          }
      })
} )
app.get('/allUsers', (req, res) => {      
      
      con.query('SELECT * FROM  Login', (err,result)=> {
           if(err){
               res.send("No se encontraron usuarios ");   
           }else{
               res.send(result);
           }

      })
} )
app.post('/sendMessage', (req, res) => {
      
      // console.log(req.body);
      var botId = '108272512033994';
      var phoneNbr = '3188432246';
      var bearerToken = 'EAAIsXlDJCmABAIxTX56ZCZCmSHP0XS4t5l3SoU9S6l7ZACKC9gBTDeNXQBBZAZBUNISKIFMJz7GRyTjmZAEFewRcLmYdFCYK9tnuafa01xNnDIsdSD9AEbJZA0p17hiZBZCZB2O8KDIdgROHHhjoGU2R6JzpZCGCOOFDnvQ8PdGtUX39YudsZClZBfpmP9K9S6TDU12AmPQVkDF1W2AZDZD';
      var url = 'https://graph.facebook.com/v17.0/' + botId + '/messages';
      const data = {            
            "messaging_product": "whatsapp",
            "to": phoneNbr,
            "type": "template",
            "template": 
            {
                 "name": "request",
                  "language": 
                        {
                          "code": "es"                             
                        },
                  "components": [                         
                        {
                              "type": "body",
                              "parameters": [
                                    {
                                    "type": "text",
                                    "text": "luis soy una prueba de requerimientos"
                                    },                            
                              ]
                        }
                  ]
            }
      };

      var postReq = {
            method: 'POST',
            headers: {
                  'Authorization': 'Bearer ' + bearerToken,
                  'Content-Type': 'application/json'
            },
            
            body:JSON.stringify(data),                
            json: true,        
      }

      // USE FETCH TO WHATAPP
      fetch(url, postReq)
      .then(data => { return data.json()})
      .then(res => {console.log(res)})
      .catch(error => console.log(error));
                                                                                                                                                                                                                                    
} )
     





{/* <img src="../assets/img/web/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                        
<img src="../assets/img/web/gallery/gallery-5.jpg" alt="" className="img-fluid"/>



<img src="../assets/img/web/gallery/gallery-6.jpg" alt="" className="img-fluid"/>



<img src="../assets/img/web/gallery/gallery-7.jpg" alt="" className="img-fluid"/> */}
