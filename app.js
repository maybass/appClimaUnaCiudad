const express = require ('express')
const hbs = require ('hbs')
const app = express()

app.set('view engine', 'hbs')
require('./helpers/helper')

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
	res.render('index' , {
		titulo: 'Inicio App Clima'
		
	})
})

app.get('/detalles-clima' , (req,res) => {
	res.render('detalles-clima' , {
		titulo : 'Detalles clima'
		
	})
	
})



app.listen(3000, ()=> {
	console.log('Servidor en puerto 3000')
	
	
})