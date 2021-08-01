const axios = require('axios').default

const instance  = axios.create()
instance.defaults.timeout = 3000
instance.defaults.baseURL = 'https://viacep.com.br/ws'
instance.defaults.headers['Content-Type'] = 'application/json'

// viaCEP - Faz a comunicação com a api da viaCEP passando o cep como parâmetro na url.
module.exports = {
    viaCEP: async (cep) => {
        try {
            let result = instance.get(`/${cep}/json`)
            return result
        } catch (error) {
            return error
        }
    }
}