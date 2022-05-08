const express = require('express');
const router = express.Router();
const idController = require('../controllers/idController');
router.
    route('/')
    .post(idController.createID)
    .get(idController.getAllIDS)
    .delete(idController.deleteID)
    .patch(idController.updateID);

module.exports = router;
