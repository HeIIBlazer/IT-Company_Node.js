module.exports = app => {
    const worker = require('../controllers/workerController')
    const router = require('express').Router()

    //Get all Workers
    router.get('/all', worker.findAll)
    //Create new Worker
    router.post('/create', worker.create)
    //Delete Worker
    router.delete('/delete', worker.delete)
    //Update Worker
    router.put('/update', worker.update)

    app.use('/api/worker', router)

}