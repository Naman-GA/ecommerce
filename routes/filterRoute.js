const express = require("express");
const router = express.Router();
const filterController = require("../controllers/filter");

router.get("/",filterController.getAll);
router.get("/:id",filterController.getById);
router.get("/category/:category",filterController.getByCategory);
router.get("/brand/:brandName",filterController.getByBrand);

module.exports=router;