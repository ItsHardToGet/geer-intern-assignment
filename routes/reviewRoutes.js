import {updatereview,deleteReview,addreview,getreview} from '../controllers/ReviewController.js'
import express from "express";
const router=express.Router();
router.post("/saveReviewtData",addreview);  
router.post("/updateReviewData",updatereview); 
router.delete("/deleteReviewData",deleteReview);   
router.post("/getReviewData",getreview);
export default router;
