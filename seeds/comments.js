const { Comment } = require("../models");

const commentdata = [
  {
    commentDesc: "Pretty easy!",
    user_id: 1,
    post_id: 2
    
  },
  {
    commentDesc: "Okay CSS is a little harder than HTML",
    user_id: 2,
    post_id: 2
  },
  {
    commentDesc: "Oh my god what even is JavaScript",
    user_id: 1,
    post_id: 3
  },
  {
    commentDesc: "God help me",
    post_id: 4,
    user_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;