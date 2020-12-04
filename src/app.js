const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// const { errors } = require('celebrate');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
routes.map(route => app.use(route));
// app.use(errors());

module.exports = app;   