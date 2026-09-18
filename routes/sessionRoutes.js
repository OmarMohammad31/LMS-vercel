const router = require('express').Router();
const { createSession, listSessions, bookSession, getRoster } = require('../controllers/sessionController');
const { requireAuth, requireInstructor } = require('../middleware/auth');

router.post('/', requireAuth, requireInstructor, createSession);
router.get('/', requireAuth, listSessions);
router.post('/:id/book', requireAuth, bookSession);
router.get('/:id/roster', requireAuth, getRoster);

module.exports = router;
