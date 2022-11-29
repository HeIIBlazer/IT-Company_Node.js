const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Certificate extends Model { }
Certificate.init(
    {
        certificate_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: db,
        modelName: 'certificate',
        timestamps: true
    }
);

module.exports = Certificate