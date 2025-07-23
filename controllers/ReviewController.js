import ReviewM from  '../models/reviewModel.js'
// 1 add
// addreview'
const addreview=async (req,res)=>{
const data=req.body;
// console.log("Review request body:", req.body);
try{
    const productReview= await ReviewM.findOne({"ProductId":data.ProductId});
   
    if (!productReview) {
      const newReviewDoc = new ReviewM({
        ProductId: data.ProductId,
        reviews: [
          {
            rating: data.rating,
            comment: data.comment,
            reviewerName: data.reviewerName,
            reviewerEmail: data.reviewerEmail,
            date: new Date(),
          },
        ],
      });
    // const result =await ReviewM.save(newReviewDoc);

      await newReviewDoc.save();
      return res.send({ err: 0, msg: "review successfully added" });
    }
   
   
    for(let i=0;i<productReview.reviews.length;i++){
      if( data.reviewerEmail===productReview.reviews[i].reviewerEmail){
       return  res.send({"err":0,"msg":"cannot add multiple comments"})
      }
    }

    const newReview = {
      rating: data.rating,
      comment: data.comment,
      reviewerName: data.reviewerName,
      reviewerEmail: data.reviewerEmail,
      date: new Date(), // Optional, but recommended
    };

   
    productReview.reviews.push(newReview);
    const result =await productReview.save();
     return res.send({"err":0,"msg":"review successfully added"})
    


}
catch(e){
   return  res.send({"err":1,"msg":"something went wrong cannot add review","err":e})
}
}

//delete
const deleteReview=async(req,res)=>{
   const data=req.body ;
  //  console.log("review to deleted",data)
   try{
    const reviewDelete= await ReviewM.updateOne( { ProductId: data.ProductId },
      { $pull: { reviews: { reviewerEmail: data.reviewerEmail } } });
    return res.send({"err":0,"msg":"data deleted sucessfully", reviewDelete})
   }
   catch(e){
    return res.send({"err":1,"msg":"something went wrong","err":e})

   }
}
//update
const updatereview=async (req,res)=>{
const data=req.body;
// console.log("inside updating reviews",data)

try{
    const productReview= await ReviewM.findOne({ ProductId:data.ProductId});
    for(let i=0;i<productReview.reviews.length;i++){
      if( data.reviewerEmail===productReview.reviews[i].reviewerEmail){
       
      productReview.reviews[i].rating=data.rating;
      productReview.reviews[i].comment=data.comment;
      // reviewerName: data.reviewerName,
      // reviewerEmail: data.reviewerEmail,
      productReview.reviews[i].date=new Date();// Optional, but recommended
    
   
   
    
    }}
 const result =await productReview.save();

   return  res.send({"err":0,"msg":"something went wrong cannot add review","data":result})
    


}
catch(e){
   return  res.send({"err":1,"msg":"something went wrong cannot add review","err":e})
}
}

//get
const getreview=async (req,res)=>{
const {data}=req.body;
// console.log("inside geting reviews",data)
try{
    const productReview= await ReviewM.findOne({ ProductId:data });
    
     return res.send({"err":0,"msg":"getting review successfully","reviewdata":productReview})
    


}
catch(e){
   return  res.send({"err":1,"msg":"something went wrong cannot fetch review data ","err":e})
}
}
export {updatereview,deleteReview,addreview,getreview};

// addreview'