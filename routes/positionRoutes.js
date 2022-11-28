module.exports = app => {
    const position = require('../controllers/positionController')
    const router = require('express').Router()

    //Get all Positions
    router.get('/all', position.findAll)
    //Create new Position
    router.post('/create', position.create)
    //Delete Position
    router.delete('/delete', position.delete)
    //Update Position
    router.put('/update', position.update)

    app.use('/api/position', router)

}