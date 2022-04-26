const mongoose=require('mongoose');


const eSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    confimpassword :{
        type:String,
        required:true
    }
})
const Register = new mongoose.model("Register",eSchema);
module.exports = Register;