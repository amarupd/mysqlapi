const db = require("..//models")

//model

const Reviews = db.reviews;

//function
//aadd revieew

const addReview = async (req, res) => {
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }
    const review = await Reviews.create(data)
    res.status(200).send(review)
}


//get all the reviews

const getAllReviews = async (req, res) => {
    const reviews = await Reviews.findAll({})
    res.status(200).send(reviews)
}

//get by id 

const getReviewById = async (req, res) => {
    let Id = req.params.id;
    const review = await Reviews.findOne({ where: { id: Id } });
    res.status(200).send(review);
}

module.exports = {
    addReview,
    getAllReviews,
    getReviewById
}
