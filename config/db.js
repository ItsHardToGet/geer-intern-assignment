import mongoose from 'mongoose';

export const database_connectivity=async()=>{
try{
    await mongoose.connect(process.env.URL)
    console.log("db connected")
}
catch(err){
    console.log("db not connected")
}


}