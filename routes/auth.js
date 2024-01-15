const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');


//Sign up route

router.post('/register', async(req, res)=>{ 
    try{
        console.log(req.body);
        const {email , username , password} = req.body;
        const hashPassword = bcrypt.hashSync(password)
        const user = new User({email , username , password : hashPassword});
        await user.save()
        res.status(200).json({ message : "Sign up successful" });
        // debugger;
    }catch(error){
        // console.log(error);
        res.status(200)
        .json({message: "User already exists"});
    }
});

// Log in route

router.post('/signin', async(req, res)=>{ 
    try{
        const user = await User.findOne({email: req.body.email});                 

        if(!user){
           res.status(200)
            .json({message: "Please Sign Up First"});
            return;
            
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password , user.password);

        if(!isPasswordCorrect){
            res.status(200).json({message: "Password Is Not Correct"});
            return;
        }

        const {password , ...others} = user._doc;
         res.status(200).json({...others , message : "Login Successful"}); 
         return
         

    }catch(error){
        res.status(200)
        .json({message: "User already exists"});
        
    }
});




module.exports=router;