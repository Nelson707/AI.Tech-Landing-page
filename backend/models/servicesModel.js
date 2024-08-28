import mongoose from "mongoose"

const servicesSchema = new mongoose.Schema({
    title: {type:String,required:true},
    image: {type:String,required:true},
    details: {type:String,required:true}
})

const servicesModel = mongoose.models.services || mongoose.model("services",servicesSchema);

export default servicesModel;
