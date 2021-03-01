const db = require('./index.js');

const getTestimonials = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM testimonials`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getCityScores = (city) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM city_scores
      WHERE city_name="${city}";`, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
  });
};

module.exports = {
  getTestimonials,
  getCityScores
};