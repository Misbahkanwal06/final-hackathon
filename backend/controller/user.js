const express = require('express');
// const asyncHandler = require('express-async-handler');
const schemaModel = require('../schema-mongodb/user');
const { connect } = require('mongoose');  // Destructure mongoose.connect
const { hash } = require('bcryptjs');
const mongoose = require("../dbs");
require('dotenv').config();


// const signup = (res,req)=>{
//     schemaModel.create(req.body)
//     .then(Authentication => 
//     res.json({
//         message: "seccess login",
//         user: checkuser
//     }))
//     // res.status(201).send("user created seccessfull");
//     .catch(res.status(400).json({ message: "Incorrect password" }));
// }

const signup = async (req, res) => {
    const {userName , email, password } = req.body;
    if (userName && email && password) {
        try {
            // const {userName, email,password} = req.body
            //    const db = await connect(process.env.MONGO_URI)
            await connect(process.env.dbs)
            const checkuser = await schemaModel.exists({ email })
            if (!checkuser) {
                await schemaModel.create({ userName, email, password: await hash(password, 16) }) // Password Encryption
                res.status(201).send("user created seccessfull");
            }
            // const creat_user = await userSchema.create({userName, email,password})
            // res.status(201).send("user created seccessfull");
            else {
                res.json({
                    message: "user already exist"
                });
            }
        }
        catch (error) {
            res.status(404).send(error.message);
        }
    }
    res.send("yes");
}

const login = async (res, req) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            await connect(process.env.dbs)
            const checkuser = await schemaModel.findOne({ email:email })
            if (checkuser) {
                const decryptPass = await compare(password, checkuser.password)
                if (decryptPass) {
                    res.json({
                        message: "seccess login",
                        user: checkuser
                    })
                } else {
                    res.status(400).json({ message: "Incorrect password" });
                }

            } else {
                res.status(404).json({ message: "User not found" });
            }

        }
        catch (error) {
            res.status(404).json({ message: email.message });
        }

    } else {
        res.status(404).json("Required field missing");
    }
    // const db = {
    //     email: "misbah@gmai.com",
    //     password: "1234",
    // }
    // if (email == db.email && password == db.password) {
    //     res.send("Successfull login");
    // }
    // else {
    //     res.status(404).send("Invalid Credentials");
    // }
}


module.exports = {signup,login};

