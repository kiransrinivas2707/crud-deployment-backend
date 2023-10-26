const express = require("express");
const studentRoute= express.Router();
const Schema =require("../model/schema");
const mongoose =require("mongoose");

studentRoute.get("/",(req,res)=>{
    Schema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

studentRoute.post("/create-student",(req,res)=>{
    Schema.create(req.body,(err,data)=>{
        if(err)
            return err
        else 
            res.json(data)
    })
})

studentRoute.route("/update-student/:id")
.get((req,res)=>{
    Schema.findById((mongoose.Types.ObjectId(req.params.id)),(err,data)=>{
        if (err)
            return err ;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    Schema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.delete('/delete-student/:id',(req,res)=>{
    Schema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err 
        else 
            res.json(data);
    })
})

module.exports = studentRoute;

