const router = require('express').Router();
const userRoutes = require('./user-routes');
// const projectRoutes = require('./projectRoutes');

router.use(userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;