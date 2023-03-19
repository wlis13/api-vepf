const validateFields = (req, res, next) => {
  const { eventName, date, local } = req.body;
  if (!eventName) {
    res.status(400).json({ message: 'O nome do evento deve ser preenchido.' });
  }
  if (!date) {
    res.status(400).json({ message: 'A data do evento deve ser preenchida.' });
  }
  if (!local) {
    res.status(400).json({ message: 'O local do evento deve ser preenchido' });
  }
  next();
};

module.exports = {
  validateFields,
}