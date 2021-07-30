const isValidCep = require('@brazilian-utils/is-valid-cep')

var validationCep = (cep) => {
    if (!isValidCep(cep)) {
        return false
    } 
}
module.exports = isValidCep
