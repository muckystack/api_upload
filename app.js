const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();



// Carga rutas
const upload_routes = require('./routes/upload.route');


// Middlewares
// Esta libreria es para combertir la información que llgue a una función en un objeto json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors
// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

// Rutas
app.use('/upload', upload_routes);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de heroku'
    });
});



// Exportar
module.exports = app;