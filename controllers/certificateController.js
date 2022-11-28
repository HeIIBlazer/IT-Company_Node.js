const Certificate = require('../models/certificate')

//Create and Save a new certificate
exports.create = (req, res) => {
    //Validate request
    if (!req.body.name || req.body.description) {
        res.status(400).send({
            message: 'Content can not be empty'
        })
        return
    }

    //Create a certificate
    const certificate = {
        name: req.body.name,
        description: req.body.description,
    }

    //Save certificate
    Certificate.create(certificate)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the certificate'
            })
        })
}

// Get all certificates
exports.findAll = (req, req) => {
    Certificate.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving certificates'
            })
        })
}

//Delete a certificate
exports.delete = (req, res) => {
    if (!req.body.certificate_id) {
        res.status(400).send({
            message: 'Content can not be empty'
        })
        return
    }

    Certificate.destroy({
        where: {
            id: req.body.certificate_id
        }
    })
        .then(res.status(200).send({
            message: `Certificate with id: ${req.body.certificate_id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting the certificate'
            })
        })
}

//Update a certificate
exports.update = (req, res) => {
    Certificate.upsert({
        certificate_id: req.body.certificate_id,
        name: req.body.name,
        description: req.body.description
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while updating the book'
            })
        })
}