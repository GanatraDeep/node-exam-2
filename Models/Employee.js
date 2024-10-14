const db = require('../db')

const schema = new db.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

const Employee = db.model('Employee',schema)
module.exports = Employee