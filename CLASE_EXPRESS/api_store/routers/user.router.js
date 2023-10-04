const express = require("express");
const router = express.Router();
const {getAll,postData, filterData} = require('../controllers/user.controller');


router.get('/',getAll);

router.post('/',postData);

/** ROUTER DYNAMIC */

router.get('/:id/:name',filterData);

module.exports = router;