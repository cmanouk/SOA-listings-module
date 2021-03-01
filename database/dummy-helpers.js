const db = require('./index.js');
const dummyData = require('./dummy-data.js');

const populateCityScores = (cityScores) => {
  cityScores.forEach((city) => {
    const { score, criteria, city_name } = city;
    db.query(`INSERT INTO city_scores(score, criteria, city_name)
      VALUES ("${score}", "${criteria}", "${city_name}");`, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
      }
    );
  });
};

const populateTestimonials = (testimonials) => {
  testimonials.forEach((testimonial) => {
    const { post, author, dog_owner, parent, commuter, home_city, likes, created_at } = testimonial;
    db.query(`INSERT INTO testimonials
      (post, author, dog_owner, parent, commuter, home_city, likes, created_at)
      VALUES
      ("${post}", "${author}", "${dog_owner}", "${parent}", "${commuter}",
      "${home_city}", "${likes}", "${created_at}");`, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
      }
    );
  });
};

populateCityScores(dummyData.generateDummyCityScores());
populateTestimonials(dummyData.generateDummyTestimonials());

module.exports = {
  populateCityScores,
  populateTestimonials
}