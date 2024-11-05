import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  getAllAppointments1,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
// router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.get("/getall", getAllAppointments);
// router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
// router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.put("/update/:id", updateAppointmentStatus);
router.delete("/delete/:id", deleteAppointment);
router.get("/getall1", getAllAppointments1);

export default router;
