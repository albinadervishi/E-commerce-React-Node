const ProductsController = require('../controllers/products.controller');  

module.exports = (app) => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/product/:id', ProductsController.getProduct);
    app.post('/api/product/new', ProductsController.createProduct);
}