const { Router } = require('express');
const { insert, readEvents } = require('../controllers/eventsController');
const { validateFields } = require('../middleware/validateEvents');

const eventRouter = Router();

eventRouter.post('/newevent', validateFields, (req, res) => insert(req, res));
eventRouter.get('/', (req, res) => readEvents(req, res));

module.exports = eventRouter;
