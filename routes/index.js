const router = require('express').Router();
const thoughtRoutes = require('./api/thoughts');
const userRoutes = require('./api/users');

router.use('/api/thoughts', thoughtRoutes);

router.use('/api/users', userRoutes);

module.exports = router;