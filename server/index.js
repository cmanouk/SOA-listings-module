const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const dbMethods = require('../database/helpers.js');
const { createStorageObj, createDeliverable } = require('./helpers.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(compression());
app.use(express.static('public'));

app.get(`/api/testimonials`, (req, res) => {
  dbMethods.getTestimonials()
    .then((result) => res.send(result))
    .catch((err) => res.status(400).send(err));
});

app.get(`/api/city_scores/:city`, (req, res) => {
  const { city } = req.params;
  dbMethods.getCityScores(city)
    .then((result) => {
      const storage = createStorageObj(result);
      const deliverable = createDeliverable(storage);
      res.send(deliverable);
    })
    .catch((err) => res.status(400).send(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`)
});