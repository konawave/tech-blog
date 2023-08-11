const sequelize = require('../config/connection');
const { users, posts } = require('../models');

const userData = require('./users.json');
const postData = require('./posts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const User = await users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postData) {
    await posts.create({
      ...posts,
      users_id: User[Math.floor(Math.random() * User.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();