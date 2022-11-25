const db = require('../config/database')
const { DataTypes, Model } = require('sequelize')

class Certificate extends Model {}
Certificate.init({
    certificate_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: db,
    modelName: 'certificate',
    timestamp: true
})

module.exports = Certificate