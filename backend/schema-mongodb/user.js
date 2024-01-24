const {Schema, model} = require('mongoose');
// const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    
    // picture:{
    //     type:String,
    //     required:true,
    //     default: ""
    // },
    // isAdmin:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // }
})

const schemaModel = model('project',userSchema);
module.exports = schemaModel;