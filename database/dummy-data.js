const faker = require('faker');

const generateDummyCityScores = () => {
  const cityScores = [];
  const city_name = 'Houston';
  const criteria = [
    'It\'s dog friendly',
    'There are sidewalks',
    'It\'s walkable to restaurants',
    'It\'s walkable to grocery stores',
    'People would walk alone at night',
    'Streets are well-lit',
    'There\'s wildlife',
    'Parking is easy',
    'They plan to stay for at least 5 years',
    'It\'s quiet',
    'Neighbors are friendly',
    'Yards are well-kept',
    'There\'s holiday spirit',
    'Car is needed',
    'Kids play outside',
    'There are community events'
  ];
  const score = () => Math.floor((Math.random() * 50) + 50);
  for (let i = 0; i < 500; i++) {
    const criteriaIndex = Math.floor(Math.random() * criteria.length)
    cityScores.push({
      city_name,
      criteria: criteria[criteriaIndex],
      score: score()
    })
  };
  return cityScores;
};

const generateDummyTestimonials = () => {
  const testimonials = [];
  const cityNames = ['Houston', 'Los Angeles', 'New York'];
  const randomBool = () => Math.floor(Math.random() * 2);
  for (let i = 0; i < 20; i++) {
    const post = faker.lorem.sentence() + ' ' + faker.lorem.sentence() + ' ' + faker.lorem.sentence();
    const cityIndex = Math.floor(Math.random() * cityNames.length);

    testimonials.push({
      post,
      author: faker.name.firstName() + ' ' + faker.name.lastName(),
      dog_owner: randomBool(),
      parent: randomBool(),
      commuter: randomBool(),
      home_city: cityNames[cityIndex],
      likes: Math.floor(Math.random() * 15),
      created_at: Date.parse(faker.date.past(2))
    })
  }
  return testimonials;
};

module.exports = {
  generateDummyCityScores,
  generateDummyTestimonials
}