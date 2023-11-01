const express = require("express");
const { getAll, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const uploadStore = require("../middleware/upload.middleware");
const router = express.Router();



router.get('/',getAll);
router.post('/',uploadStore.single("photo"),createProduct);
router.put('/:id',uploadStore.single("photo"),updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router