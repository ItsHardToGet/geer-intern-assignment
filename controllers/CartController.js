import CartM from "../models/CartModles.js";
const getAll=async(req ,res)=>{
 
    try{
        let products=await CartM.find() ;
        return res.json({"err":0,"msg":"All cart  products","prodata":products})
    }
    catch(err){
    return  res.json({"err":1,"msg":"Something went wrong"}) 

}
}
const saveData=async(req,res)=>{
    var data=req.body;
    try{
        await CartM.deleteMany({});
      
        await CartM.insertMany(data)
        return (res.json({"err":0,"msg":"cart updated","data":data}))
    }
    catch(err){
      console.log(err)
     return res.json({"err":1,"msg":"Product already added or something went wrong","error":err})
    }  
}
const deleteData=async(req,res)=>{
    var {pname}=req.body;
    // console.log("pname",pname);
    try{
     const del=   await CartM.deleteMany({pname});
      
       
        return (res.json({"err":0,"msg":`${pname}`,"data":del}))
    }
    catch(err){
      console.log(err)
     return res.json({"err":1,"msg":"Product already added or something went wrong","error":err,"pname":pname})
    }  
}
export {saveData,getAll,deleteData}

