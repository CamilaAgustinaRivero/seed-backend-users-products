//Requiero el modelo de producto
const {Product} = include('models');

class ProductsController {
    static async fetch (req, res, next) {
        try {
            const products = await Product.find(req.query);
            res.send(products);
        }
        catch (error) {
            next(error);
        }
    }
}

//Exporto el controlador
module.exports = ProductsController;