const serviceViaCep = require('../repositories/validationCepRepository')
const isValidCep = require('@brazilian-utils/is-valid-cep')

module.exports = {
    validationCep: async (cep) => {
        try {
            const promise = new Promise(async (resolve, reject) => {
                if (!isValidCep(cep)) {
                    let err = new Error('Cep inválido')
                    return reject(err)
                }
                const result = await serviceViaCep.viaCEP(cep)
                return resolve(result)
            })
            return promise   
        } catch (error) {
            return error
        }
    }

}
