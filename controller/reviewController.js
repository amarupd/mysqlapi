const db=require("..//models")

//model

const Reviews=db.reviews;

//function
//aadd revieew

const addReview=async(req,res)=>
{
    let data={
        rating:req.body.rating,
        description: req.body.description
    }
    const review=await Review.create(data)
    res.status(200).send(review)
}
