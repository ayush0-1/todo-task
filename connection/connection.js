const mongoose = require('mongoose');

const conn = async(req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://iddev0001:p16112111@cluster0.6vgowtc.mongodb.net/todolist?retryWrites=true&w=majority")
        .then(console.log("connected"));
    }catch(error){
        res?.status(400).json({
            message : "Not Connected"
        })
    }

}

conn();