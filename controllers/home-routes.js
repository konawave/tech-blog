const router = require('express').Router();
const { users, posts } = require('../models');

// to render home page
router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dash', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;