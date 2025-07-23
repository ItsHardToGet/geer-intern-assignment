import mongoose from 'mongoose';
const schema=mongoose.Schema({
    ProductId:{type: String,   required: true, unique: true},
    reviews:{
        type:[ {
            rating: Number,
            comment: String,
            date: Date,
            reviewerName: String,
            reviewerEmail: String,
            // reviewerId:String
          }]
        }
})
const Review = mongoose.model('ReviewM', schema);
export default Review;