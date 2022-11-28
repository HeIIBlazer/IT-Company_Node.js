module.exports = app => {
    const company = require('../controllers/companyController')
    const router = require('express').Router()

    //Get all Companies
    router.get('/all', company.findAll)
    //Create new Company
    router.post('/create', company.create)
    //Delete Company
    router.delete('/delete', company.delete)
    //Update Company
    router.put('/update', company.update)

    app.use('/api/company', router)

}