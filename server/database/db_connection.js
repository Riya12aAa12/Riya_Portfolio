const mongo= require('mongoose');

const Db= process.env.DATABASE 

mongo.connect(Db,{
    useNewUrlParser:true
}

).then(()=>
    {
        console.log("MongoDb Connection Sucessful");
    }).catch((err)=>console.log(err));
