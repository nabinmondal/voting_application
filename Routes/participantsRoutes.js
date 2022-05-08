const express = require('express');
const participantsController = require('../controllers/participantController');
const router = express.Router();

router
    .route('/:id?')
    .post(participantsController.createParticipant)
   .get(participantsController.getAllParticipants)
    .delete(participantsController.deleteParticipants)
    .patch(participantsController.updateParticipants);

module.exports = router;
