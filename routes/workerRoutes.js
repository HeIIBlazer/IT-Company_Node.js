module.exports = app => {
    const worker = require('../controllers/workerController')
    const router = require('express').Router()

    //Get all Workers
    router.get('/allWorkers', worker.findAll)
    //Create new Worker
    router.post('/createWorker', worker.create)
    //Delete Worker
    router.delete('/deleteWorker', worker.delete)
    //Update Worker
    router.put('/updateWorker', worker.update)

}