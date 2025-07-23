import { saveData,getAll,deleteData } from "../controllers/CartController.js";
import express from "express";
const router=express.Router();
router.post("/saveCartData",saveData);  
router.delete("/deleteCartData",deleteData);   
router.get("/getCartData",getAll);
export default router;
