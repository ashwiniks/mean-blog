const mongoose = require('mongoose');
const uniqueValidatore = require("mongoose-unique-validator");
const userSchema = mongoose.Schema({
     email : {
         type : String,
         required : true,
         unique : true
     },
     password : {
         type : String,
         required : true
     }

});
mongoose.plugin(uniqueValidatore);

module.exports = mongoose.model('user',userSchema);