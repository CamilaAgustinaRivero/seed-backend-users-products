require('../../src/global');
const {Product} = include('/models');
const products = require('./products.json');

exports.seed = async knex => {
    await knex (Product.tableName).del();
    try {
        await Product.startTransaction();
        await Promise.all(products.map(product => Product.insertOne(product)));
        return Product.commitTransaction();
    }
    catch (err) {
        console.log('err:', err);
    }
};