import express from "express";
import { addService, deleteService, listServices } from "../controllers/servicesController.js";
import multer from "multer";

const servicesRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

servicesRouter.post("/add",upload.single("image"), addService)
servicesRouter.get("/list", listServices)
servicesRouter.delete("/delete", deleteService)

export default servicesRouter
