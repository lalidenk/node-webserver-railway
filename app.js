require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');


//handlebars

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');


app.use(express.static('public'))



app.get('/', function (req, res) {
  res.render('home',{nombre:'laura', titulo:'curso node'})
})

/*app.get('/', function (req, res) {
  res.sendFile(__dirname +'/public/index.html')
})*/

/*app.get('/generic', function (req, res) {
  res.sendFile(__dirname +'/public/generic.html')
})*/

app.get('/generic', function (req, res) {
  res.render('generic',{nombre:'laura', titulo:'curso node'})
})

app.get('/elements', function (req, res) {
  res.render('elements',{nombre:'laura', titulo:'curso node'})
})

/*app.get('/elements', function (req, res) {
  res.sendFile(__dirname +'/public/elements.html')
})*/





/*app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  })*/

  app.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/404.html');
  })

app.listen(port,()=>{
    console.log(`aplicación corriendo en el puerto ${port}`)

})