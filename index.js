const { Category } = require("./category");
const { sequelize } = require("./config");
// const { Products } = require("./products");

async function main() {
    await sequelize.sync({ force: true });

    // const cat1 = await Category.create({
    //     name: "digital", icon: "digione.svg", desc: "some digital details"
    // })

    // const cat2 = await Category.create({ name: "digital2", icon: "digione.svg", desc: "some digital details", parentId: 1 })
    await Category.bulkCreate([
        { name: "digital", icon: "digione.svg", desc: "some digital details" },
        { name: "digital2", icon: "digione.svg", desc: "some digital details", parentId: 1 },
        { name: "digital3", icon: "digione.svg", desc: "some digital details", parentId: 1 },
    ]);

    // await cat1.setCategory(cat2)

    // await Products.bulkCreate([
    //     { title: "macbook", price: 1000, belongsto: 2 },
    //     { title: "surfacebook", price: 1100, belongsto: 1 },

    // ])


}

main()