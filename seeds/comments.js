const { Comment } = require("../models");

const commentdata = [
  {
    postTitle: "Challenge 1",
    postDesc: "Pretty easy!",
    user_id: 1,
    
  },
  {
    postTitle: "Challenge 2",
    postDesc: "Okay CSS is a little harder than HTML",
    user_id: 2,
    post_id: 2
  },
  {
    postTitle: "Challenge 3",
    postDesc: "Oh my god what even is JavaScript",
    user_id: 1,
    post_id: 3
  },
  {
    postTitle: "Challenge 4",
    postDesc: "God help me",
    post_id: 4
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;