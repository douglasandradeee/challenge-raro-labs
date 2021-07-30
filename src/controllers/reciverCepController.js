const viaCepService = require('../services/viaCepService')

module.exports = {
    reciverCep : async (req, res) => {
        try {
            const cep = req.params.cep
            let result = await viaCepService.validationCep(cep)
            return res.send(result.data)
        } catch (error) {
            return res.send(error)
        }
    }    
}