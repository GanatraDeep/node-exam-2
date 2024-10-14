const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Practice2')
.then(function(){
    console.log("DB Connected");
})

module.exports = mongoose;
