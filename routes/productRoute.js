const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const multer=require('multer')
const path=require("path")

const storage = multer.diskStorage({
    destination:__dirname+'/uploads/images',
    filename: (req, file, cb) => {
        cb(null,file.fieldname+'-'+Math.random()+Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({
    storage:storage
});

router.post("/",upload.array("images",3),productController.add);
router.patch("/update/:id",productController.updateproduct);
router.delete("/delete/:id",productController.deleteproduct);

module.exports=router;
