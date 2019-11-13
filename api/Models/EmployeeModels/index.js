const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const EmployeeSchema = new Schema({
    name : {
        type : String,
        minlength : 3,
        trim : true
    },
    email : {
        type : String,
        minlength : 11,
        required : false,
        default: 'default@linkline.com'
    },
    phone : {
        type : String,
        minlength : 11,
        unique : true,
        required : true
    },
    user_id : {
        type : String,
        unique : true,
        required : true
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee