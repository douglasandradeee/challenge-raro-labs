const axios = require('axios').default

const instance  = axios.create()
instance.defaults.timeout = 3000
instance.defaults.baseURL = 'https://viacep.com.br/ws'
instance.defaults.headers['Content-Type'] = 'application/json'

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