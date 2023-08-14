const { Comment } = require("../models");

const commentdata = [
  {
    commentDesc: "Test 1",
    user_id: 1,
    post_id: 2
    
  },
  {
    commentDesc: "Test 2",
    user_id: 2,
    post_id: 2
  },
  {
    commentDesc: "Test 3",
    user_id: 1,
    post_id: 3
  },
  {
    commentDesc: "Test 4",
    post_id: 4,
    user_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;