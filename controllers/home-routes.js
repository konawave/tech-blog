const router = require('express').Router();
const { User, Post } = require('../models');

// need to create an array called posts that pushes all the posts from the database

// to render home page
router.get('/', async (req, res) => {
    try {
        let postArr = await Post.findAll();
        let postDescArr = [];
        for (i=0;i<postArr.length;i++) {
            postDescArr.push(postArr[i].postDesc);
        }
        console.log(postDescArr);
        res.render('home' , { postDescArr }
        );
    } catch (err) {
        console.log(err, 'No luck getting home!')
        res.status(501).json('Nobody expects the homepage inquisition!', err);
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