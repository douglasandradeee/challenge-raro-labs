#!usr/bin/env node
const express = require('express')
const app = express()
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const debug = require('debug')('challenge-raro-labs:www')

if (cluster.isMaster) {
    for( i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (err) => {
        debug(err)
    })
} else {
    let server = app.listen("8000")
}