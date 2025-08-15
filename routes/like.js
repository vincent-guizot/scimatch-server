const express = require('express');
const router = express.Router();
const LikeController = require('../controllers/LikeController');

router.get('/', LikeController.getAll);
router.post('/', LikeController.create);

module.exports = router;
