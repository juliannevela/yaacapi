const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

// Middleware
app.use(cors());
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
