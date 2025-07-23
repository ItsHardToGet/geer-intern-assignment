import AuthModel from "../models/AuthModel.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const salt = bcrypt.genSaltSync(10);
const Login=async(req,res)=>{
    try{
        let {email,password}=req.body;
        let user=await AuthModel.findOne({email})
        if(!user){
           return  res.json({"err":1,"msg":"Enter correct email and password"})

        }
        if( bcrypt.compareSync(password, user.password)){
            let payload={
                fullName:`${user.firstName} ${user.lastName}`,
                email:user.email,
                role:user.role
            }
            let token=jwt.sign(payload,process.env.CLIENT_SECRET,{expiresIn:'1h'});

          return  res.json({"err":0,"msg":"Login success","token":token});
        }else{
           return res.json({"err":1,"msg":"Enter correct email and password"})
 
        }


    }
    catch(err){
     res.json({"err":1,"msg":"enter correct email or password"})  ; 
   

    
    }
    res.send({"err":0,"mess":"Login Success"})
}
const Register= async (req,res)=>{
   try{
    const userData=req.body;
    const salt = bcrypt.genSaltSync(10);
    userData.password=bcrypt.hashSync( userData.password, salt);
    const user=new AuthModel(userData);
    
    await user.save();
     res.json({"err":0,"msg":"User registered successfully"})
    }
   catch(err){
    res.send({"err":1,"msg":"enter valid email||phone details for registration "});
    console.log("err:",err);
   }
   
   
   
}
export {Login,Register}
