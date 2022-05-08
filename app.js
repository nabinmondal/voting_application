const express = require('express');
const voterRotues = require('./Routes/voterRoutes');
const participantsRoutes = require('./Routes/participantsRoutes');
const idRoutes = require('./Routes/IdRoutes');
const app = express();

app.use(express.json());
app.use('/voters',voterRotues);
app.use('/pariticipants',participantsRoutes);
app.use('/id',idRoutes);


module.exports = app;