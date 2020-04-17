/**
 * validatorColumns.js
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 05/02/2020
 * Version: 1.0
 */


module.exports = function validateColumns(array, colums) {
    let error = false;

    for (let i = 0; i < colums.length; i++) {

        try {
            if (array[colums[i]] == undefined) {
                error = true;
            }
        } catch (error) {
            return true;
        }

    }

    return error;
}