// CONTACT ME FORM SCHEMA

const mongoose= require('mongoose');

const contactSchema= new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true
    },

    mobile:
    {
        type:Number,
        require:true
    },

    message:
    {
        type:String,
        required:true
    }
})


const Enquiry= mongoose.model('ENQUIRY', contactSchema);
module.exports=Enquiry;
