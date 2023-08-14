const router = require('express').Router();
const sequelize = require('sequelize')
const { User, Post, Comment } = require('../models');

// need to create an array called posts that pushes all the posts from the database

// to render home page
router.get('/', async (req, res) => {
    try {
      // Retrieve all posts along with their associated users
      const postsWithUsers = await Post.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at']
          },
        include: [{ model: User, attributes: ['username']}, {model: Comment }],
      });
      
      const posts = postsWithUsers.map((post) => post.get({ plain: true }));
  
      res.render('home', { posts }); // Pass the data to the Handlebars template
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Click login button, get directed to login page
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log('could not get to login page')
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log('Could not sign up!')
    res.status(500).json(err);  
  }
})

router.get('/dashboard', async (req, res) => {
  try {
    // Retrieve all posts along with their associated users
    const sessionUser = req.session.username
    const userPosts = await User.findAll({
      where: {
        username: sessionUser
      },
      attributes: {
          exclude: ['created_at', 'updated_at']
        },
      include: [{ model: Post, attributes: ['postDesc']}, {model: Comment }],
    });
    
    const users = userPosts.map((user) => user.get({ plain: true }));

    res.render('dashboard', { users }); // Pass the data to the Handlebars template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;