const express=require('express');
const Enquiry= require('../model/form_schema.js');
const router= express.Router();
require('../database/db_connection');


router.post('/contact', async(req, res)=>
{
    const {name, email, number, message} = req.body;
    if(!name || !email || !number || !message)
    {
        return res.status(422).json({error: "Please fill all the fields"})
    }

    const enquiry= new Enquiry({name:name, email:email, mobile:number, message:message})

    try
    {
        const msgreceived= await enquiry.save();
        if(msgreceived)
        {
            res.status(201).json({message:"Message Received"})
        }
    }

    catch(err)
    {
        console.log(err);
    }
})

module.exports =router;
