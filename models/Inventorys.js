const mongoose = require ('mongoose'); //import mongoose 

//create schema and income attributes inside schema
const inventorySchema = new mongoose.Schema({
//mongoDB is auto generating an object ID

    productId : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    }, 
     
    productName : {
       
        type : String,
        required : true, 
    },

    quantity : {
        
        type : Number, 
        required : true,
    },
    costPrice : {
        type : Number,
        required : true
    },

    

})

//when go to the database --> Income becomes incomes
//export module
module.exports = mongoose.model("Inventory", inventorySchema);