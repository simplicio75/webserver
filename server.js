var express = require('express')
var colors = require('colors');
var app = express();
const hbs = require('hbs');

const port= process.env.PORT || 3000;

app.use(express.static( __dirname + '/public')); //tutto ciò che metto in questa cartella sara publico

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    res.render('home',{
        nome:"Galdierirent",
        anno: new Date().getUTCFullYear()
    });

})
app.get('/data', function (req, res) {
    
    res.send('hola data');

})
app.listen(port,()=>{
    console.log("server is start!".green);
});
