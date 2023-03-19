const { insertEvents } = require('../services/eventService');

const insert = async (req, res) => {
  try {
    const { eventName, date, local, description } = req.body;
    const objectNewEvent = {
      eventName,
      date,
      local,
      description
    };
    await insertEvents(objectNewEvent);
    res.status(200).json({ message: 'O novo envento foi inserido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'ocorreu algum erro no servidor' });
  }
};

module.exports = {
  insert,
};