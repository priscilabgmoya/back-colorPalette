import { Router} from "express";
import { createNewPalette,getColorPalette } from "../controller/colorPalette.controller";

const router: Router = Router();
router.get("/api/getAllColor", getColorPalette); 
router.post("/api/registerColor", createNewPalette); 

module.exports = router; 