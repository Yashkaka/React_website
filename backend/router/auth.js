const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.use(express.json());
  
require('../models/db/conn');
const User = require('../models/userschema');
// router.get('/', (req, res) => {
//     res.send(`Hello world from the server rotuer js`);
// });

router.post('/register',async (req, res) => {
   

    const { name,email,phone, work,password}= req.body;

    if(!name|| !email|| !phone|| !work|| !password){
        return res.status(422).json({error : 'Plz fill require filled'});

    }
    // console.log(name);
    // res.json({ message: req.body });
    // res.send("mera register page");

    try {
        const userExist = await User.findOne({email : email})

        if(userExist){
            return res.status(422).json({error : 'Email already Exist.'})
        }
        // else if(password != cpassword){
        //     return res.status(422).json({error : 'Password is not matching!'})
        // }
        else{
            const user = new User({name ,email ,phone ,work ,password})

            const userRegister = await user.save();

            if(userRegister) {
                res.status(201).json({message: "user registerd successfully"})
            }
            else{
                res.status(500).json({error : "Failed to register"})
            }
        }

        
    }
    catch(err){
        console.log(err)
    }   
});





router.post('/Login' , async(req , res) =>{
    const {email , password} = req.body

    let token

    if (!email || !password){
        return res.status(422).json({error : 'Plz fill require filled'})
    }

    try{
        const userLogin = await User.findOne({email : email})

        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password)

            token = await userLogin.generateAuthToken()

            console.log(token)

            res.cookie("jwttoken" , token ,{
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            })

            if(isMatch){
                return res.status(201).json({message : 'Login Succesful'})
            }
            else{
                res.status(500).json({error : "Invalid Credetial"})
            }
        }
        else{
            res.status(500).json({error : "Invalid Credetial"})
        }

        
    }

    catch(err) {
        console.log(err)
    }
})


module.exports = router;