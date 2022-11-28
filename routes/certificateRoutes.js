module.exports = app => {
    const certificate = require('../controllers/certificateController')
    const router = require('express').Router()

    //Get all s
    router.get('/all', certificate.findAll)
    //Create new Certificate
    router.post('/create', certificate.create)
    //Delete Certificate
    router.delete('/delete', certificate.delete)
    //Update Certificate
    router.put('/update', certificate.update)

    app.use('/api/certificate', router)

}