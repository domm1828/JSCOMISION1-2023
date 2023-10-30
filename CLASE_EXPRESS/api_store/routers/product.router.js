const express = require("express");
const { getAll, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const router = express.Router();



router.get('/',getAll);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router