const { request } = require('express');
const express = require('express');
const Inventorys = require('../models/Inventorys');

const router = express.Router();

//save inventory
router.post('/inventory/save',(req,res)=>{

    let newInventory = new Inventorys(req.body);

    newInventory.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory added successfully"
        });
    });
});

//get inventory
router.get('/inventory',(req,res)=>{
    Inventorys.find().exec((err,inventorys)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInventory:inventorys
        });
    });
});

//update inventory
router.put('/inventory/update/:id',(req,res)=>{
    Inventorys.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,inventory)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete inventory
router.delete('/inventory/delete/:id',(req,res)=>{
    Inventorys.findByIdAndRemove(req.params.id).exec((err,deletedInventory)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedInventory
        });
    });
});

//get a specific inventory detail

router.get("/inventory/:id",(req,res) => {
    let productId = req.params.id;

    Inventorys.findById(productId,(err,inventory) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            inventory
        });
    });
});

module.exports = router;
