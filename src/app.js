const express = require('express')
const app = express()
const port = 8000
const routes = require('./routes/routes')

app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use((err, res, next) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    } 
    res.status(err.statusCode).json({
        error: err.Error
    });
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app