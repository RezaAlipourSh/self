const { sequelize } = require("./config");
const { DataTypes } = require("@sequelize/core");
// const { Products } = require("./products");

const Category = sequelize.define("category", {
    name: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    icon: { type: DataTypes.STRING(30), defaultValue: "icon.svg" },
    parentId: {
        type: DataTypes.INTEGER, allowNull: true,
        references: {
            model: this.Category,
            key: "id"
        },
        onDelete: "CASCADE"
    },
    desc: { type: DataTypes.TEXT, defaultValue: "this is Description about Category." },

}, { freezeTableName: true, createdAt: true, updatedAt: false });

sequelize.sync().then(() => {
    console.log("suceesd");
}).catch((error) => {
    console.log(error);
})

Category.hasOne(Category, {
    as: "parent", foreignKey: "parentId",
    inverse: {
        as: "children"
    }
});

Category.belongsTo(Category, {
    as: "children", foreignKey: "parentId", inverse: {
        as: "parent"
    }
});

// Category.hasMany(Products, { foreignKey: "belongsTo" });
// Products.belongsToMany(Category, { foreignKey: "id", through: Category })

module.exports = {
    Category
}

