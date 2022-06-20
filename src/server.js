const express = require ('express');
const path = require('path');
const route = require('./route')

const server = express();

//define ejs como view engine
server.set('view engine', 'ejs' );

//ler arquivos da pasta publica
server.use(express.static('public'));

//novo caminho para a views ejs pois está dentro de src
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3333, ()=> console.log('Server is running!'));