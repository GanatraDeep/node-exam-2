const db = require('../db')

const schema = new db.Schema({
    name:{
        type:String,
        required:true
    }
})

const Department = db.model('Department',schema)
module.exports = Department