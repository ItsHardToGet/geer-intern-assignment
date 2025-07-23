import { saveOrderData,getAllOrders } from "../controllers/OrderController.js";
import express from "express";
const router=express.Router();
router.post("/saveOrderData",saveOrderData);  
// router.delete("/deleteCartData",deleteData);   
router.post("/getOrderData",getAllOrders);
export default router;