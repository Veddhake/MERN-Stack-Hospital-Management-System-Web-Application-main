import express from "express";
import { getAllDiseases, sendDisease } from "../controller/diseaseController.js";
import { isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send",isPatientAuthenticated, sendDisease);
router.get("/getall", isPatientAuthenticated, getAllDiseases);

export default router;
