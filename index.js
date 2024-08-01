const { Category } = require("./category");
const { sequelize } = require("./config");

async function main() {
    await sequelize.sync({ force: true });

    await Category.bulkCreate([
        { name: "digital", icon: "digione.svg", desc: "some digital details" },
        { name: "digital2", icon: "digione.svg", desc: "some digital details" },
        { name: "digital3", icon: "digione.svg", desc: "some digital details" },
    ])


}

main()