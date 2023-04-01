const express = require('express');
const { getForms } = require('./forms.controller');

const formsRouter = express.Router();

formsRouter.get('/forms', getForms);

module.exports = formsRouter;
