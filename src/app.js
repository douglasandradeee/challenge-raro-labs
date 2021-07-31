const express = require('express')
const app = express()
var timeout = require('connect-timeout')
const routes = require('./routes/routes')

app.use(timeout('5s'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(routes)
app.use((err, res, next) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    } 
    res.status(err.statusCode).json({
        error: err.Error
    });
})

module.exports = app