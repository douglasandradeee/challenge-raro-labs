const express = require('express')
const routes = express.Router()

const reciverCepController = require('../controllers/reciverCepController')

routes.get("/:cep", reciverCepController.reciverCep)

module.exports = routes