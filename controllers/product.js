const express = require("express");
const mongoose = require("mongoose");
const productModel = require("../models/productModel");

exports.add = async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get('host')
        const num = Object.keys(req.files).length;
        const newProduct = new productModel({
            name: req.body.name,
            category: req.body.category,
            brandName: req.body.brandName
        })
        const c=await newProduct.save();
        for (let i = 0; i < num; i++) {
            await productModel.findByIdAndUpdate(c._id, { $push: { "images":url + '/public/' + req.files[i].filename} }, {
            new: true
        })
        }
        res.json({
            success: true,
            message:"Details Saved",
            code: 201
        })
    }
    catch (error) {
        res.json({
            success: false,
            message: "Product insertion failed!",
            code: 401
        })
    }
}


exports.updateproduct = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const product = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).send("No Product with that id");

        const updated = await productModel.findByIdAndUpdate(
            _id,
            { ...product, _id },
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong!",
            code: 401
        })
    }
}

exports.deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send("No Product with that id");
        await productModel.findByIdAndRemove(id);

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong!",
            code: 401
        })
    }

}