const router = require('express').Router();
const { User, Post } = require('../models');

// need to create an array called posts that pushes all the posts from the database

// to render home page
router.get('/', async (req, res) => {
    try {
      // Retrieve all posts along with their associated users
      const postsWithUsers = await Post.findAll({
        include:
         [{ model: User, model: Comment }],
      });
      
      const posts = postsWithUsers.map((post) => post.get({ plain: true }));
      console.log(posts);
  
      res.render('home', { posts }); // Pass the data to the Handlebars template
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log('could not get to login page')
        res.status(500).json(err);
    }
});

router.get('/dash', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        console.log('no luck getting to dash!')
        res.status(500).json(err);
    }
});

module.exports = router;