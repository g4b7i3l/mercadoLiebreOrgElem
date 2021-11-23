const express = require ("express"); // modulo de tercero - se invoca solo con el nombre
const app = express (); // funcion de alto nivel llamada express
const port = 3000;
const path = require('path');
app.use(express.static('public'));
// req ->>> request (peticion)
// res ->>> response (respuesta)


app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'/views',"home.html"))); //ruta raiz localhost:3000
app.get('/contactos',(req,res)=> res.send('Página de contacto'));
app.get('/productos',(req,res)=> res.send('Listado de productos'));
app.get('/registro',(req,res)=>res.sendFile(path.join(__dirname,'/views',"registro.html")));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'/views',"login.html")));


app.listen(port,() => console.log("Servidor funcionando en http://localhost:"+ port )) // 3000 es el numero de puerto - seguido de un callback


