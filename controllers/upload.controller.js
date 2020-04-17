'use strict'

/**
 * auth.controller
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */

// External librarys
const // Internal
    errors = require('../global/error_code'),
    Upload = require('../models/upload.model'),
    // Importo libreria que permite trabajar con archivos
    fs = require('fs'),
    // Importo libreria que permite trabajar con rutas del sistema de ficheros
    path = require('path');


class UploadController {
    /**
     * Register new user
     * @param {*} req 
     * @param {*} res 
     */
    async upload(req, res) {

        var upload = new Upload();

        if (req.files) {
            /* Se toma la direccion del fichero con un nombre aleatorio */
            var rutaArchivo = req.files.file.path;
            console.log('rutaArchivo:', rutaArchivo);

            /* Se toma la direccion del archivo y se divide por directorios */
            var separarArchivo = rutaArchivo.split('\\');
            console.log('separarArchivo:', separarArchivo);

            /* Sacamos el nombre del archivo */
            var nombreArchivo = separarArchivo[1];
            console.log(nombreArchivo);

            /* Sacamos la extencion del archivo */
            var separarNombre = nombreArchivo.split('\.');
            var extencion = separarNombre[1];
            console.log(extencion);


            upload.imageUrl = nombreArchivo;

            // Guardo información
            await upload.save((err, uploadSave) => {

                if (err) return res.status(500).send(errors.INTERNAL_SERVER_ERROR_500);

                if (!uploadSave) {

                    fs.unlink('./uploads/' + nombreArchivo, (err) => {

                        if (err) console.log('Error al eliminar la portada anterior');
                        console.log('Se elimino la portada anterior');

                        return res.status(404).send({
                            error: errors.NOT_FOUND_404,
                            message: 'No se ha podido guardar la imagen.'
                        });

                    });

                }

                return res.status(200).send({ uploadSave });

            });


        } else {
            return res.status(200).send({ message: 'No se han subido archivos' });
        }

    }


    // Ver imagen
    async Image(req, res) {

        // Tomo el id del documento
        var imagen = req.params.image;

        var rutaArchivo = './uploads/' + imagen; /* Agregamos la direccion completa de la ubicacion del archivo */

        /* Comprobando de que existe el archivo */
        fs.exists(rutaArchivo, (exists) => {
            /* Si existe el archivo */
            if (exists) {
                /* Nos devuelve el archivo en crudo */
                res.sendFile(path.resolve(rutaArchivo));
            } else {
                res.status(200).send({ message: 'No existe la imagen' });
            }
        });

    }
}




module.exports = UploadController;