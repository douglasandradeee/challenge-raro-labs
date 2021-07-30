const express = require('express')
const routes = express.Router()
const api = require('../repository/repository')
const validationCep = require('../service/service')

routes.get("/:cep", async (req ,res) => {
    try {
        const cep = req.params.cep
        
        if (!validationCep(cep)) {
            return res.status(400).send({"message": "cep invalido"})
        }
        const result = await api.get(`/${cep}/json`)
        return res.send(result.data)
    } catch (error) {
        return res.send(error)
    }
})

module.exports = routes