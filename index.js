import express from "express"
import { configDotenv } from "dotenv"
import {database_connectivity} from './config/db.js'
import cors from "cors";
configDotenv({path:'./.env'});
import router from './routes/AouthRoute.js'
import prouter from './routes/ProductRoute.js'
import serveIndex from 'serve-index';
 const PORT=process.env.PORT|8899;


const app =express();
database_connectivity()
app.use(express.json());
app.use (cors());
app.use('/api/v1/auth',router);
app.use("/api/v1/products",prouter);
app.use('/images/',express.static('uploads'));
app.listen(PORT,(err)=>{
console.log("server connected");
})