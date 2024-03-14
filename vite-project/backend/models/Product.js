const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    chipsName: {
        type:String,
        trim:true,
        required:true
    } , 
    chipsImg:{
        type:String,
        trim:true
    } ,
    expiry:{
        type:String,
        trim:true
    }
})




let Product = mongoose.model('Product' , productSchema);
module.exports = Product;