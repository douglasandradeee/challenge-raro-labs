const cepService = require('../services/viaCepService')

module.exports = {
    reciverCep : async (req, res, next) => {
        try {
            const cep = req.params.cep
            let result = await cepService.logicSearchCep(cep)
            return res.status(200).json(result.data)
        } catch (err) {
            switch (err.message) {
                case 'Cep inválido':
                    return res.status(400).json({message:err.message})
                case 'Cep inválido: O CEP precisa conter apenas números':
                    return res.status(400).json({message:err.message})
                default:
                    return res.status(500).json({message:err.message})
            }
        }
    }    
}