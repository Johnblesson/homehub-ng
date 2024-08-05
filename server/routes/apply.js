import { Router } from "express";
const router = Router();

import { createApplication, getAllApplication, editApplication, deleteApplication, application, adminApplication, updateApplication, applyForSponsorship, adminApplyForSponsorship, createBoost } from "../controllers/apply.js";
import ensureAuthenticated from "../middlewares/auth.js";
// import { checkSudoMiddleware } from '../middlewares/sudo.js'
import { checkManagerMiddleware } from '../middlewares/manager.js'
import { isAdmin } from "../middlewares/isAdmin.js";

// Add more routes here
router.post("/apply", ensureAuthenticated, createApplication);
router.get("/all-applications", ensureAuthenticated, getAllApplication);
router.get("/edit-application/:id", ensureAuthenticated, isAdmin, editApplication);
router.delete("/delete-application/:id", ensureAuthenticated, isAdmin, checkManagerMiddleware, deleteApplication);
router.get("/delete-application/:id", ensureAuthenticated, isAdmin, checkManagerMiddleware, deleteApplication);

router.get('/application-form', ensureAuthenticated, application)
router.get('/admin-application-form', ensureAuthenticated, adminApplication)
router.patch('/update-admin-application/:id', ensureAuthenticated, isAdmin, updateApplication);

router.post("/apply-boost", ensureAuthenticated, createBoost);
router.get("/apply-for-sponsorship", applyForSponsorship);
router.get("/admin-apply-for-sponsorship", adminApplyForSponsorship);

export default router;