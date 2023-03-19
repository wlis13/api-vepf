const { Router } = require('express');
const { insert } = require('../controllers/eventsController');
const { validateFields } = require('../middleware/validateEvents');

const eventRouter = Router();

eventRouter.post('/newevent', validateFields, (req, res) => insert(req, res));

module.exports = eventRouter;
