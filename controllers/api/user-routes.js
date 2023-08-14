const router = require('express').Router();
const { users } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await users.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    // Create a user
    console.log(req.body);
    const newUser = await users.create({
      username: req.body.username,
      email: req.body.username,
      password: req.body.password,
    });

    // If the user was successfully created, you can send a response or redirect to a success page.
    // For example:
    res.status(200).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    // If an error occurs during user creation, handle the error here.
    console.error(error);
    res.status(500).json({ message: 'Failed to create user.' });
  }
});

//route post for newPost
router.post('/newPost', async (req, res) => {
  try {
    // Create a user
    console.log(req.body);
    const newPost = await Posts.create({
      username: req.body.username,
      password: req.body.password,
    });

    // If the user was successfully created, you can send a response or redirect to a success page.
    // For example:
    res.status(200).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    // If an error occurs during user creation, handle the error here.
    console.error(error);
    res.status(500).json({ message: 'Failed to create user.' });
  }
});

module.exports = router;