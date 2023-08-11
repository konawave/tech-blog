const sequelize = require('../config/connection');
const { User, Post } = require('../models'); // Ensure that the model names match

const userData = require('./users.json');
const postData = require('./posts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const createdUsers = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      users_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
