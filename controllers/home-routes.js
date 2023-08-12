const router = require('express').Router();
const { User, Post } = require('../models');

// need to create an array called posts that pushes all the posts from the database

// to render home page
router.get('/', async (req, res) => {
    try {
        let postArr = await Post.findAll();
        console.log(postArr);
        res.render('home', { postArr });
    } catch (err) {
        console.log(err, 'No luck getting home!')
        res.status(501).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log('could not get to login page')
        res.status(503).json(err);
    }
});

router.get('/dash', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        console.log('no luck getting to dash!')
        res.status(502).json(err);
    }
});

module.exports = router;