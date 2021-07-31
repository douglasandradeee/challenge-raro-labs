#!/usr/bin/env node
const app = require('../app');
const cluster = require('cluster');
const os = require('os');
const debug = require('debug');
const http = require('http');

http.globalAgent.keepAlive = true

const cpus = os.cpus();
const log = debug('raro_Labs:wwww');

const onWorkerError = (code, signal) => log(code, signal)

if (cluster.isMaster) {
    cpus.forEach(_ => {
        const worker = cluster.fork();
        worker.on('error', onWorkerError);
    })
    cluster.on('exit', (err) => {
    const newWorker = cluster.fork();
    newWorker.on('error', onWorkerError);
    log('A new worker rises', newWorker.process.pid);
    })
    cluster.on('exit', (err) => log(err));
} else {
    const server = app.listen(8000, () => log('server started'))
    server.on('error', (err) => log(err));
}