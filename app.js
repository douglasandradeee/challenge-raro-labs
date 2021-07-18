const express = require('express')
const app = express()
const api = require('./api/api')
const port = 8000
const validationCep = require('./validation/cep')

//ver no video pq o cara usou isso
app.use(express.json())

app.get("/:cep", async (req ,res) => {
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
app.listen(port)


