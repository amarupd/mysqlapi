//importing controllers product and reviews

const productController = require("../controller/productController")
const reviewController = require("../controller/reviewController")

const router = require("express").Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProduct);

router.get('/published', productController.publishedProduct);

//review url and controllers

router.post('/addreviews', reviewController.addReview)

router.get('/allreviews', reviewController.getAllReviews)

router.get('/productReviews', reviewController.getProductReviews)



router.get('/:id', reviewController.getReviewById)

router.put('/review/:id', reviewController.updateReview)

router.get('/:id', productController.getSingleProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;