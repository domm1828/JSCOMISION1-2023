const express = require("express");
const { getAll,postData,deleteUser,updateUser,getById } = require("../../controllers/mongo/user.mongo.controller");
const router = express.Router();



router.get('/',getAll);

router.post('/',postData);

router.delete('/:id',deleteUser);

router.put('/:id',updateUser)

router.get('/:id',getById)

module.exports = router;