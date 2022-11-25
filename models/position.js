const db = require('../config/database')
const { DataTypes, Model } = require('sequelize')

class Position extends Model {}
Position.init({
    position_id: {
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
    modelName: 'position',
    timestamp: true
})

module.exports = Position