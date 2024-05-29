const express = require('express');
const app=express();

const cors= require('cors');
app.use(cors());

const { Console } = require("console");

const dotenv= require("dotenv");
dotenv.config({path:'./database.env'})

app.use(express.json());
app.use(require('./router/auth.js'));


const PORT= process.env.PORT;
app.listen(PORT,()=>
{
    console.log(`The server will run on port number - ${PORT} (App.js)`);
});

