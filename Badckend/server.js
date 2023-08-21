const express = require('express')
 
const mysql = require('mysql')
 

const credentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'intimo'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
})


app.get('/usuarios', (req, res) => {
	var connection = mysql.createConnection(credentials)
	connection.query('SELECT * FROM Login', (error, result) => {
		if (error) {
			res.status(500).send(error)
		} else {
			res.status(200).send(result)
		}
	})
	connection.end()
})


app.listen(4000, () => console.log('hola soy el servidor'))