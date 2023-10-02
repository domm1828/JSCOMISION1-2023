const express = require("express");
const router = express.Router();
const {getAll,postData} = require('../controllers/user.controller');


router.get('/',getAll);

router.post('/',postData);


module.exports = router;