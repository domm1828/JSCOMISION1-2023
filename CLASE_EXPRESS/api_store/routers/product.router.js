const express = require("express");
const { getAll, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const uploadStore = require("../middleware/upload.middleware");
const veryToken = require("../middleware/veryToken.middleware");
const router = express.Router();



router.get('/',getAll);
router.post('/',veryToken, uploadStore.single("photo"),createProduct);
router.put('/:id',veryToken,uploadStore.single("photo"),updateProduct);
router.delete('/:id',veryToken,deleteProduct);

module.exports = router