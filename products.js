const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("./config");
const { Category } = require("./category");

const Products = sequelize.define("product", {
    title: { type: DataTypes.STRING(30), allowNull: false },
    images: { type: DataTypes.STRING(100), defaultValue: "image.png" },
    price: { type: DataTypes.INTEGER, allowNull: false },
    desc: { type: DataTypes.TEXT, defaultValue: "Description about product ..." },
    count: { type: DataTypes.INTEGER, defaultValue: 0 },
    belongsTo: {
        type: DataTypes.INTEGER, allowNull: false, defaultValue: 0,
        references: {
            model: Category,
            key: 'id'
        }
    },

}, { timestamps: false, createdAt: 'Created_Date' });

module.exports = {
    Products
}