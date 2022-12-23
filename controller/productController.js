const db = require("../models");


//create our main model

const Product = db.products
const Review = db.reviews


//creating product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

//get all products

const getAllProduct = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//get single products

const getSingleProduct = async (req, res) => {
    let Id = req.params.id;
    let product = await Product.findOne({ where: { id: Id } })
    res.status(200).send(product)
}

//to update

const updateProduct = async (req, res) => {
    let Id = req.params.id;
    const product = await Product.update(req.body, { where: { id: Id } })
    res.status(200).send("results updated succesfully");
}

//soft delete

const deleteProduct = async (req, res) => {
    let Id = req.params.id;
    await Product.destroy({ where: { id: Id } })
    res.status(200).send('product is deleted')
}

//publish product

const publishedProduct = async (req, res) => {
    const product = await Product.findAll({ where: { published: true } })
    res.status(200).send(product)
}

//connect one to many relating product and reviews

const getProductReviews = async (req, res) => {
    const data = await Product.findAll({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: 2 }
    })
    res.status(200).send(data)
}

//export all the controls

module.exports = {
    addProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    publishedProduct,
    getProductReviews
}