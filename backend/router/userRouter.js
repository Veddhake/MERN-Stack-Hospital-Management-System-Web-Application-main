import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
  removeDoctor,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

// router.post("/patient/register", patientRegister);
// router.post("/login", login);
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// router.post("/doctor/remove", isAdminAuthenticated, removeDoctor);
// router.get("/doctors", getAllDoctors);
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.post("/doctor/addnew", addNewDoctor);
router.post("/doctor/remove", removeDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", getUserDetails);
router.get("/admin/me", getUserDetails);
router.get("/patient/logout", logoutPatient);
router.get("/admin/logout", logoutAdmin);

export default router;
