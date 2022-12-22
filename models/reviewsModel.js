module.exports=(sequelize,DataTypes)=>{
    const Review=sequelize.define("review",{
        rating:{
            type:DataTypes.FLOAT
        },
        description:{
            type:DataTypes.TEXT
        }
    });
    return Review;
}