const users = require('./users');
const posts = require('./posts');

users.hasMany(posts, {
    foreignKey: 'name'
});

posts.belongsTo(users, {
    foreignKey: 'name'
});

module.exports = { posts, users};
