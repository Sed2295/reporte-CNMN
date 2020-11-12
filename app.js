const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

//desplegar en heroku o local
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/jq', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')

app.get('/',  (req, res) =>  {
	//home o index pagina prinicpal
})
app.get('/views/emp', function (req, res) {
  res.render('empleados');
});
app.get('/views/reg', function (req, res) {
  res.render('registro_empleados');
});

app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${port}`)
})
//http://localhost:3000/views/emp  http://localhost:3000/views/emp