import express from "express";
import multer from "multer";
import { addProject, deleteProject, editProject, listProjects } from "../controllers/projectsController.js";

const projectRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

projectRouter.post("/add",upload.single("image"),addProject)
projectRouter.get("/list",listProjects)
projectRouter.put("/edit/:id",upload.single('image'),editProject)
projectRouter.delete("/delete",deleteProject)

export default projectRouter