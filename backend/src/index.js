const express = require('express');
const routes = require('./routes');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(routes);
app.listen(4000);
