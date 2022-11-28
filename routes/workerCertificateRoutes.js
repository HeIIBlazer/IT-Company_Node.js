module.exports = app => {
    const workerCertificate = require('../controllers/workerCertificateController')
    const router = require('express').Router()

    //Get all connections between Workers and Certificates
    router.get('/all', workerCertificate.findAll)
    //Create new connections between Worker and Certificate
    router.post('/create', workerCertificate.create)
    //Delete connection between Worker and Certificate
    router.delete('/delete', workerCertificate.delete)
    //Update connection between Worker and Certificate
    router.put('/update', workerCertificate.update)

    app.use('/api/workerCertificate', router)

}