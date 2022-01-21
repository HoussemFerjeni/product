const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
productName: {
    type : String
},
description: {
    type : String
},
price: {
    type : Number
},
category: {
    type : String
},
imageUrl: {
    type : String
},
reviews: [
    {
    value : Number,
    content : String,
}]
})

module.exports =mongoose.model('Product',productSchema);
