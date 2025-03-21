import express from "express";
const router = express.Router();
import homeController from "../controllers/homeController.js"


router.get('/', homeController.index);
router.get('/cad', homeController.cadastrou);
router.get('/user/:id', homeController.usuario);

export default router;
