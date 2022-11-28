module.exports = app => {
    const company = require('../controllers/companyController')
    const router = require('express').Router()

    //Get all Companies
    router.get('/allCompanies', company.findAll)
    //Create new Company
    router.post('/createCompany', company.create)
    //Delete Company
    router.delete('/deleteCompany', company.delete)
    //Update Company
    router.put('/updateCompany', company.update)

}