const mongoose = require("mongoose");
const productModel = require("../models/productModel");

exports.getAll = async (req, res) => {
    const product = await productModel.find().sort({ _id: -1 })
    try {
        if (product) {
            res.json({
                success: true,
                data: {
                    product: product
                },
                code: 201
            })
        }
        else {
            res.json({
                message: "No products found!"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong!",
            code: 401
        })
    }
}

exports.getById=async(req, res) => {
    try{
        const product = await productModel.findById(req.params.id)
        res.json({
            "data": product,
            "message": "Product by id: " + req.params.id,
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error: ' + err)
    }
}

exports.getByCategory=async(req, res) => {
    try{
        const product= await productModel.find({'category': req.params.category})
        res.json({
            "data": product,
            "message": "List of all " + req.params.category + " products.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
}

exports.getByBrand=async(req, res) => {
    try{
        const product= await productModel.find({'brandName': req.params.brandName})
        res.json({
            "data": product,
            "message": "List of all " + req.params.brandName + " products.",
            "status": true,
            "code": 200
        })
    }catch(err){
        res.send('Error ' + err)
    }
}