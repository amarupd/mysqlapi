const productController = require("../controller/productController")

const router = require("express").Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProduct);

router.get('/:id', productController.getSingleProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

router.get('/publishedProduct', productController.publishedProduct);

module.exports = router;