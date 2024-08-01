const { default: Sequelize } = require("@sequelize/core");
require("dotenv").config()

const sequelize = new Sequelize({
    database: "sequelizeproject",
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: process.env.DBPASS,
    port: 3306
})

// sequelize.authenticate().then(async () => {
//     await sequelize.sync({ alter: true });
//     console.log("connecte to mysql");
// }).catch(err => {
//     console.log("connect error", err);
// })

module.exports = {
    sequelize
}