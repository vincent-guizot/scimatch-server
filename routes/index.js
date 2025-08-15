const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const likeRoutes = require('./like');
const matchRoutes = require('./match');

router.use('/users', userRoutes);
router.use('/likes', likeRoutes);
router.use('/matches', matchRoutes);

module.exports = router;
