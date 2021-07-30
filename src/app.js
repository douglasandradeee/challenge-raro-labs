const express = require('express')
const app = express()
const port = 8000
const routes = require('./routes/routes')



app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log(`Servidor rodando na ports ${port}`);
})

