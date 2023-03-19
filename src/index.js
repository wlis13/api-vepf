const express = require('express');
const dotenv = require('dotenv');
const eventRouter = require('./routes/eventsRoutes');
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/', eventRouter);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))