const sequelize = require('../config/connection');
const seedUser = require("./users");
const seedPost = require("./posts");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedDatabase();