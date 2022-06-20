const express = require('express');
const route = express.Router();

//Controllers:
const userController = require('./controllers/user-controller');

route.get('/', (req, res) => {
    res.render('pages/index')
})

route.get('/user', (req,res)=> {
    res.redirect('https://www.tapecariaalves.com.br');
})

route.get('/user/local', (req, res) => {
    res.render('pages/local')
})

//criação de usuário formilario
route.get('/usuario/cadastramento', (req, res) => {res.render('pages/novo-usuario')})
//submissao formulario
route.post('/cadastramento', userController.create)







//exporta o arquivo route para ser usado no server
module.exports = route;