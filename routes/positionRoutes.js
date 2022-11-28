module.exports = app => {
    const position = require('../controllers/positionController')
    const router = require('express').Router()

    //Get all Positions
    router.get('/allPositions', position.findAll)
    //Create new Position
    router.post('/createPosition', position.create)
    //Delete Position
    router.delete('/deletePosition', position.delete)
    //Update Position
    router.put('/updatePosition', position.update)

}