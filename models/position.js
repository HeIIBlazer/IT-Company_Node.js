const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Position extends Model { }
Position.init(
    {
        position_id: {
            type: DataTypes.INTEGER,
            autoIncremented: true,
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
        modelName: 'position',
        timestamps: true,
    }
);

module.exports = Position;