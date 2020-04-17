/**
 * error_code.js
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */


var INVALID_PARAMETERS_422 = {
    message: "One or more parameters are invalid",
    code: "INVALID_PARAMETERS",
    status: 422,
    icon: 'warning',
    title: 'Uno o mas parametros son invalidos.',
};
var ALREADY_EXISTS_403 = {
    message: "The resource already exists with the same parameters",
    code: "ALREADY_EXISTS",
    status: 403,
    icon: 'warning',
    title: 'Los datos ya existen.',
};
var NOT_FOUND_404 = {
    message: "The resource is not found",
    code: "NOT_FOUND",
    status: 404,
    icon: 'warning',
    title: 'Esta información no existe.',
};
var NOT_AUTHORIZED_401 = {
    message: "You doesnt have permission for this action",
    code: "NOT_AUTHORIZED",
    status: 401,
    icon: 'warning',
    title: 'Permisos invalidos.',
};
var CANNOT_BE_DELETED_406 = {
    message: "The resource cant be deleted",
    code: "CANNOT_BE_DELETED",
    status: 406,
    icon: 'error',
    title: 'Los datos no se han podido eliminar.',
};
var INTERNAL_SERVER_ERROR_500 = {
    message: "An error has occurred on the server",
    code: "INTERNAL_SERVER_ERROR",
    status: 500,
    icon: 'error',
    title: 'Problemas en el servidor',
};

module.exports = {
    INVALID_PARAMETERS_422,
    ALREADY_EXISTS_403,
    NOT_FOUND_404,
    NOT_AUTHORIZED_401,
    CANNOT_BE_DELETED_406,
    INTERNAL_SERVER_ERROR_500,
};