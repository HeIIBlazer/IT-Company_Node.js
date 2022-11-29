const db = require('../config/database');
const { DataTypes, Model } = require('sequelize');

class Company extends Model { }
Company.init({
    company_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        sequelize: db,
        modelName: 'company',
        timestamp: true
    }
)

module.exports = Company;