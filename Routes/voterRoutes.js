const express = require('express');
const votersController = require('../controllers/voterController');
const router = express.Router();

router
    .route('/:id?')
    .post(votersController.createVoter)
    .get(votersController.getAllVoters)
    .delete(votersController.deleteVoter)
    .patch(votersController.updateVoter);

module.exports = router;