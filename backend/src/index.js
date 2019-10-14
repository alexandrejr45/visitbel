const express = require('express');
const firebase = require('./firebaseConfig');

const app = express();
const connection = firebase.saveContentDocument(
  'Igreja da Sé',
  'História',
  'A igreja foi fundada em...',
);

app.get('/', (req, res) => res.send('Hello world'));

app.listen(4000);
