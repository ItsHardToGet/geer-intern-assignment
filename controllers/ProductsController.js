import Product from "../models/ProductModles.js"

const getAll=async (req,res)=>{

try{
    let products=await Product.find();

return  res.json({"err":0,"msg":"All products","prodata":products}) 
}
catch(err){
    return  res.json({"err":1,"msg":"Something went wrong"}) 

}


 
}
const getById=async (req,res)=>{
const data=req.params.id;
try{
const value=await Product.findOne({_id:data})
return res.json({"err":0,"prodata":value})
}
catch(err){

  return res.json({"err":1,"msg":"cannot get products by id, something went wrong"})
}
  
  }

  const addproduct=async (req,res)=>{

    if(req.file==undefined){
        return res.json({"err":1,"msg":"Err in file uploading"})
      }
        try{
    
       
        let ProductData=req.body;
        ProductData={...ProductData,"imagePath":req.file.filename} ;
            let newProduct =new Product(ProductData)
            await newProduct.save()
            return res.json({"err":0,"msg":"Add products"})    
           
       
    }
    catch(err){
      console.log(err)
     return res.json({"err":1,"msg":"Product already added or something went wrong","error":err})
    }  


   // return res.json({"err":0,"msg":" Add product"})  
  }
  const deleteproduct=async (req,res)=>{
    await  Product.deleteOne({ _id: req.params.id});

    return res.json({"err":0,"msg":`${req.params.id}`})  
  }


  const updateproduct=async (req,res)=>{
    try{

console.log("Received update request");
console.log("Body:", req.body);

console.log("File:", req.file);
// await Product.updateOne({_id:id,body});
const pp = await Product.findOneAndUpdate(
  { _id: req.params.id },
  { $set: req.body },
  { new: true }
);
console.log("ending update request");
//await Product.updateOne({ _id: id }, body);
return res.json({"err":0,"msg":"product updated"})
    }catch(err){
      return res.json({"err":1,"msg":"something went wrong in updation"})
    }
    
  }

  const updateproductAndImg=async (req,res)=>{
    const id=req.params.id;

    if(req.file==undefined){
        return res.json({"err":id,"msg":"Err in file uploading"})
      }
        try{
    
       
       // let ProductData=req.body;
       // ProductData={...ProductData,"imagePath":req.file.filename} ;
           // let newProduct =new Product(ProductData)
            let ProductData = {
              ...req.body,
              imagePath: req.file.filename
            };
            const pp= await Product.findOneAndUpdate({_id:req.params.id},{ $set:ProductData},  { new: true })
            // await Product.updateOne({ _id: id }, { $set: body });
            return res.json({"err":0,"msg":"Product updated"})    
           
       
    }
    catch(err){
     return res.json({"err":1,"msg":"something went wrong","error":err})
    }  


   // return res.json({"err":0,"msg":" Add product"})  
  }


  export{updateproduct,deleteproduct,addproduct,getById,getAll,updateproductAndImg}