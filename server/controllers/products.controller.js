const Products = require('../model/products.model');

module.exports.findAllProducts = (req, res) => {
    Products.find() 
         .then((allProducts) =>{res.json({products: allProducts })})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}

module.exports.getProduct = (request, response) => {
    Products.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    const { name } = request.body;
    Products.exists({ name })
      .then(nameExists => {
        if (nameExists) {
          return Promise.reject({ errors: { name: { message: 'This item is already existing' } } });
        } else {
            return Products.create(request.body);
        }
      })
      .then(product => response.json(product))
      .catch(err => response.json(err));
  };