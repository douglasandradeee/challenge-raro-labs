const cepService = require('../services/viaCepService')
const errorsMessages = require('../constants/errosMessages')

module.exports = {
    reciverCep : async (req, res, next) => {
        try {
            const cep = req.params.cep
            let result = await cepService.logicSearchCep(cep)
            return res.status(200).json(result.data)
        } catch (err) {
            switch (err.message) {
                case errorsMessages.errorInvalidCepMessage:
                    return res.status(400).json({message:err.message})
                case errorsMessages.errorCepOnlyNumber:
                    return res.status(400).json({message:err.message})
                default:
                    return res.status(500).json({message:err.message})
            }
        }
    }    
}