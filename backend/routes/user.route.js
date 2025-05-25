import express from "express";
import { register, login, updateProfile, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js"; // Assuming you have this middleware for file handling
import multer from "multer";

// Initialize multer storage
const upload = multer({ storage: multer.memoryStorage() });

// Create the router
const router = express.Router();

// Route for registering a user
router.route("/register").post(singleUpload, register);

// Route for logging in a user
router.route("/login").post(login);

// Route for logging out a user
router.route("/logout").get(logout);

// Route for updating a profile
// We use isAuthenticated to check the user's authorization and multer to handle file upload
router.route("/profile/update").post(isAuthenticated, upload.single("file"), updateProfile);

export default router;
