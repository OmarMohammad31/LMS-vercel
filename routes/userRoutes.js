const router = require('express').Router();
const { getMe, getAllUsers } = require('../controllers/userController');
const { requireAuth } = require('../middleware/auth');

router.get('/', getAllUsers);
router.get('/me', requireAuth, getMe);

module.exports = router;
