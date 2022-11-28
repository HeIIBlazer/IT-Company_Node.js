const WorkerCertificate = require('../models/workerCertificate')

//Create and Save a new connection between Worker and Certificate
exports.create = (req, res) => {
    //Validate request
    if (!req.body.workerId || !req.body.certificateId || !req.body.dateOfReceipt) {
        res.status(400).send({
            message: 'Content can not be empty'
        })
        return
    }

    //Create a connection between Worker and Certificate
    const workerCertificate = {
        workerId: req.body.workerId,
        certificateId: req.body.certificateId,
        dateOfReceipt: req.body.dateOfReceipt
    }

    //Save connection between Worker and Certificate
    WorkerCertificate.create(workerCertificate)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating a connection between Worker and Certificate'
            })
        })
}

// Get all connections between Worker and Certificate
exports.findAll = (req, res) => {
    Position.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving connections between Worker and Certificate'
            })
        })
}

//Delete a connection between Worker and Certificate
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty'
        })
        return
    }

    WorkerCertificate.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(res.status(200).send({
            message: `Connection between Worker and Certificate with id: ${req.body.position_id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting a connection between Worker and Certificate'
            })
        })
}

//Update a connection between Worker and Certificate
exports.update = (req, res) => {
    Position.upsert({
        id: req.body.id,
        workerId: req.body.workerId,
        certificateId: req.body.certificateId,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while updating a connection between Worker and Certificate'
            })
        })
}