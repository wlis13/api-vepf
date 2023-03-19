const { eventService } = require('../services');

const insert = async (req, res) => {
  try {
    const { eventName, date, local, description } = req.body;
    const objectNewEvent = {
      eventName,
      date,
      local,
      description
    };
    await eventService.insertEvents(objectNewEvent);
    res.status(200).json({ message: 'O novo envento foi inserido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'ocorreu algum erro no servidor' });
  }
};

const readEvents = async (_req, res) => {
  const getReadEvents = await eventService.readEvents();
  res.status(200).json(getReadEvents);
}

module.exports = {
  insert,
  readEvents,
};