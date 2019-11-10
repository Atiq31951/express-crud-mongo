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
        minlength : 6,
        unique : true,
        required : true,
        trim : true
    },
    phone : {
        type : String,
        minlength : 11,
        unique : true,
        required : true,
        trim : true
    },
    dev_id : {
        type : String,
        minlength : 6,
        unique : true,
        required : true,
        trim : true
    },
    joining_date : {
        type : String,
        trim : true,
        required : true
    },
    permanent_date : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true,
        trim : true
    },
    salary : {
        type : Number,
        required : false
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee