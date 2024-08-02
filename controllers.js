const { Op } = require("@sequelize/core");
const { Category } = require("./category");
const { Products } = require("./products");

async function findById(id) {
    const Categories = await Category.findAll({
        where: {
            id: {
                [Op.eq]: id,
            },
        },
        include: {
            model: Products,
            attributes: ['id', 'title', 'price', 'belongsTo']
        },
        attributes: ['id', 'name'],
        raw: true,
    });
    console.log(Categories);
}

module.exports = {
    findById
}