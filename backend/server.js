const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-headers": "Nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de mensajes');
})

router.post('/message', function(req, res){
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error inesperado', 500, "Es solo una simulacion de los errores");
    }
    else{
        response.success(req, res, 'Añadido correctamente', 201);
    }
})

app.use('/app', express.static('html_old'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');