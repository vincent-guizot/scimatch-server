const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/MatchController');

router.get('/', MatchController.getAll);
router.post('/', MatchController.create);

module.exports = router;
