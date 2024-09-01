import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type:String,required:true},
    image: {type:String,required:true},
    details: {type:String,required:true}
})

const projectsModel = mongoose.models.projects || mongoose.model("projects",productSchema);

export default projectsModel;
