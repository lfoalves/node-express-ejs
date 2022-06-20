module.exports = {
    create(req, res) {

        const numero = req.body.tCodigo;
        const nome = req.body.tNome;
        const email = req.body.tEmail;
        const senha = req.body.tSenha;
        console.log(numero, nome, email, senha);
        
        if(!numero, !nome, !email, !senha) {
            res.render('pages/insira-dados')

        } else if(numero, nome, email, senha) {
            res.render('pages/sucesso')
            
        } else {
            res.render('partials/error')
        }

        
    },

    index(req, res) {}
}