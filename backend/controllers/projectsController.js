import projectsModel from "../models/projectModel.js";
import fs from "fs"

const addProject = async(req,res) =>{
    let image_filename = `${req.file.filename}`;

    const project = new projectsModel({
        title:req.body.title,
        details:req.body.details,
        image:image_filename
    })
    try {
        await project.save();
        res.json({success:true,message:"Project added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const listProjects = async(req,res) =>{
    try {
        const projects = await projectsModel.find({})
        res.json({success:true,data:projects})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const editProject = async(req,res) =>{
    const projectId = req.params.id; // The ID of the project to be updated
    

    // Construct the updated data object
    const updatedData = {
        title: req.body.title,
        details: req.body.details,
    };

    // Check if a new image is provided via form-data
    if (req.file) {
        updatedData.image = req.file.filename; // Add the new image filename to updated data
    }

    try {
        // Find the service by ID and update it with new data
        const updatedProject = await projectsModel.findByIdAndUpdate(
          projectId,
          updatedData,
          { new: true } // Option to return the modified document
        );
    
        if (!updatedProject) {
          return res.json({ success: false, message: "Project not found" });
        }
    
        res.json({ success: true, message: "Project updated", service: updatedProject });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating project" });
      }
}

const deleteProject = async(req,res) =>{
    try {
        const project = await projectsModel.findById(req.body.id)
        fs.unlink(`uploads/${project.image}`,()=>{})
        await projectsModel.findByIdAndDelete(req.body.id)
        return res.json({ success: true, message: "Project deleted" });
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addProject,listProjects,editProject,deleteProject}