const serviceViaCep = require('../repositories/validationCepRepository')
const isValidCep = require('@brazilian-utils/is-valid-cep')
const errorsMessages = require('../constants/errosMessages')

module.exports = {
    logicSearchCep: async (cep) => {
        try {
            const promise = new Promise(async (resolve, reject) => {
                let checkCep = Number(cep)
                if (isNaN(checkCep)){
                    let err = new Error(errorsMessages.errorCepOnlyNumber)
                    return reject(err)
                }
                if (!isValidCep(checkCep)) {
                    let err = new Error(errorsMessages.errorInvalidCepMessage)
                    return reject(err)
                }
                const result = await serviceViaCep.viaCEP(checkCep)
                return resolve(result)
            })
            return promise   
        } catch (error) {
            return error
        }
    }

}
