const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
        name: {
            type: String
        },
        category: { 
            type: String
        },
        brandName: { 
            type: String
        },
        images: { 
            type: Array 
        },
},
    {
        timestamps: true,
    })


module.exports = mongoose.model("product", productSchema);