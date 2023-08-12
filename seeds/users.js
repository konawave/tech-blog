const { User } = require("../models");

const userData = [
  {
    username: "Nick",
    email: "nick@nick.com",
    password: "password123",
  },
  {
    username: "Rose",
    email: "rose@rose.com",
    password: "password345",
  },
  {
    username: "Melissa",
    email: "melissa@mel.com",
    password: "password456",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;