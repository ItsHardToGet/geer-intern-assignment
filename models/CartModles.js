import mongoose from 'mongoose';
const CartSchema=new mongoose.Schema({
     um: { type: String },
    pname:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String ,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        
    },
    features:{
        type:String ,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
   
    imagePath:{
        type:String,
        required:true,
    },
    reviews:{
        type:[ {
            rating: Number,
            comment: String,
            date: Date,
            reviewerName: String,
            reviewerEmail: String,
            reviewerId:String
          }],
        default:[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"},{"rating":4,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lucas Gordon","reviewerEmail":"lucas.gordon@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"}],
    },
    returnPolicy:{
        type:String,
        default:"No return policy",
    },
    shippingInformation:{
        type:String,
        default:"Ships in 3-5 business days"
    },
    availabilityStatus:{
        type:String,
         default:"In Stock"
    },
    brand:{
        type:String,
        default:"Essence"
    },
    discountPercentage:{
         type:String,
        default:"10.48"
    },
    rating:{
        type:String,
        default:"2.56"
    },
    
proquantity:{
 type:Number,
        default:0
}



   



},{timestamps:true});
const Cart=mongoose.model('CartM',CartSchema);
export default Cart;