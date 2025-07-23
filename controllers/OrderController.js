import OrderM from "../models/Order.js"
const getAllOrders=async (req ,res)=>{
//    const  data=req.body;
//    console.log("order data",data)
    try{
        let OrderDetail= await OrderM.find(data);
        return res.json({"err":0,"msg":"All cart  products","prodata":OrderDetail})
   
    }
     catch(err){
    return  res.json({"err":1,"msg":"Something went wrong"}) 

}

}
const saveOrderData=async(req,res)=>{
    let incomingData=req.body;
    //  console.log("order data to be saved",data)
    try{
       // await OrderM.deleteMany({});
// let incomingData = req.body

  // Remove _id from each object
  let cleanData = incomingData.map(({ _id, ...rest }) => rest);


      await OrderM.insertMany(cleanData);
        // await OrderM.insertMany(data)
        return (res.json({"err":0,"msg":"cart updated","data":data}))
    }
    catch(err){
      console.log(err)
     return res.json({"err":1,"msg":"Product already added or something went wrong","error":err})
    }  
}
export{saveOrderData,getAllOrders};