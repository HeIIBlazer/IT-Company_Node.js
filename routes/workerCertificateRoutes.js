module.exports = app => {
    const workerCertificate = require('../controllers/workerCertificateController')
    const router = require('express').Router()

    //Get all connections between Workers and Certificates
    router.get('/allWorkersCertificates', workerCertificate.findAll)
    //Create new connections between Worker and Certificate
    router.post('/createWorkerCertificate', workerCertificate.create)
    //Delete connection between Worker and Certificate
    router.delete('/deleteWorkerCertificate', workerCertificate.delete)
    //Update connection between Worker and Certificate
    router.put('/updateWorkerCertificate', workerCertificate.update)

}