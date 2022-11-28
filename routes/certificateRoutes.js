module.exports = app => {
    const certificate = require('../controllers/certificateController')
    const router = require('express').Router()

    //Get all s
    router.get('/allCertificates', certificate.findAll)
    //Create new Certificate
    router.post('/createCertificate', certificate.create)
    //Delete Certificate
    router.delete('/deleteCertificate', certificate.delete)
    //Update Certificate
    router.put('/updateCertificate', certificate.update)

}