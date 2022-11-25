const db = require('../config/database')
const { DataTypes, Model } = require('sequelize')
const Worker = require('./worker')
const Certificate = require('./certificate')

class WorkerCertificate extends Model {}
WorkerCertificate.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    workerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Worker,
            key: 'worker_id'
        },
    },
    certificateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Certificate,
            key: 'certificate_id'
        },
    },
    dateOfReceipt: {
        type: DataTypes.STRING,
        allowNull: false
    },

},
{
    sequelize: db,
    modelName: 'workcert',
    timestamp: false,
    indexes: [{
        unique: true,
        fields: ["workerId", "certificateId"]
    }]
})

module.exports = WorkerCertificate