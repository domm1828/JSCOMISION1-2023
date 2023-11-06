const express = require("express");
const { getAll, postAddress, deleteAddress, updateAddress, getById } = require("../controllers/user_address.controller");
const router = express.Router();
 


router.get('/',getAll);

router.post('/',postAddress);

router.delete('/:id',deleteAddress);

router.put('/:id',updateAddress)

router.get('/:id',getById);

module.exports = router;