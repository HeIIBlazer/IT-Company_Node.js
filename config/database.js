const {Sequelize} = require('sequelize')
const connect = new Sequelize('it-companies', 'root', '',{ 
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connect;