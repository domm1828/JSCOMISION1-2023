const express = require("express");
const router = express.Router();
const {getAll,postData, updateUser,deleteUser} = require('../controllers/user.controller');
const validateUser = require("../request/users.request");


router.get('/',getAll);

router.post('/',validateUser,postData);

router.delete('/:id',deleteUser);

router.put('/:id',updateUser)

module.exports = router;