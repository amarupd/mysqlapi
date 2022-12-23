const productController = require("../controller/productController")
const reviewController=require("../controller/reviewController")

const router = require("express").Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProduct);

router.get('/published', productController.publishedProduct);



router.get('/:id', productController.getSingleProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;