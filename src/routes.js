const UserController = require('./controllers/UserController');
const ProductsController = require('./controllers/ProductController');

module.exports = [{
  endpoint: '/users',
  handler: UserController.index
}, {
  endpoint: '/products',
  handler: ProductsController.index
}];