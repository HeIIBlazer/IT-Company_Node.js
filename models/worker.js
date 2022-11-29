const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const Company = require('./company');
const Position = require('./position');

class Worker extends Model { }
Worker.init(
    {
        worker_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateJoined: {
            type: DataTypes.DATE,
            allowNull: false
        },
        companyID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Company,
                key: 'company_id'
            }
        },
        positionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Position,
                key: 'position_id'
            }
        }
    },
    {
        sequelize: db,
        tableName: 'worker',
        timestamps: false
    }
);

module.exports = Worker;