import { Login,Register } from "../controllers/AuthController.js";
import express from "express";

const router=express.Router();
router.post("/signin",Login);   
router.post("/signup",Register);

export default router ;