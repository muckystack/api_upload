const mongoose = require('mongoose'),
    app = require('./app'),
    // url = 'mongodb://localhost:27017/prueba';
    url = 'mongodb+srv://admin:admin@cluster0-kx29w.mongodb.net/upload?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('La conexión ha la base de datos se ha realizado correctamente');

    // Iniciamos el servidor
    app.listen(PORT, () => {
        console.log('Servidor eschuchando en el puerto: ' + PORT);
    });


}).catch(error => {
    console.log(error);
});