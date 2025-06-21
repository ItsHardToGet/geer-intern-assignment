import express from 'express';
import Product from '../models/ProductModles.js';
import { addproduct, deleteproduct, getAll, getById, updateproduct,updateproductAndImg } from '../controllers/ProductsController.js';
import upload from '../middlewares/upload.js';
const router=express.Router();
router.get('/getallproducts',getAll  );
router.get('/getby/:id',getById);
router.post('/addproduct',upload.single("att"),addproduct);
router.delete('/delete/:id',deleteproduct)
router.put("/edit/:id",updateproduct)
router.put("/editImg/:id",upload.single("att"),updateproductAndImg)


export default router;

