import servicesModel from "../models/servicesModel.js";
import fs from "fs"

// add service
const addService = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const service = new servicesModel({
        title:req.body.title,
        details:req.body.details,
        image:image_filename,
    })
    try {
        await service.save();
        res.json({success:true,message:"Service added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


const listServices = async (req,res) =>{
    try {
        const services = await servicesModel.find({});
        res.json({success:true,data:services})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const deleteService = async (req,res) =>{
    try {
        const service = await servicesModel.findById(req.body.id);
        fs.unlink(`uploads/${service.image}`,()=>{})
        await servicesModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Service deleted"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addService,listServices,deleteService}
