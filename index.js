const { sequelize } = require("./config");
const { findById } = require("./controllers");
const { Category } = require("./category");
const { Products } = require("./products");

async function main() {
    await sequelize.sync({ alter: true });
    // await Category.bulkCreate([
    //     { name: "laptops", icon: "laptop.svg", desc: "laptop category", parentId: 1 },
    // ]);

    // await Products.bulkCreate([
    //     { title: "asus vivobook", price: 600, belongsTo: 46 },
    //     { title: "msi katana", price: 950, belongsTo: 46 },
    // ])
    findById(46)
};
main();