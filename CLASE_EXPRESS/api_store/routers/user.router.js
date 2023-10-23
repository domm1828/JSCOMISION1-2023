const express = require("express");
const router = express.Router();
const {getAll,postData, filterData,deleteUser} = require('../controllers/user.controller');
const validateUser = require("../request/users.request");


router.get('/',getAll);

router.post('/',validateUser,postData);

router.delete('/:id',deleteUser);
/** ROUTER DYNAMIC */

router.get('/:id/:name',filterData);

module.exports = router;