const router = require('express').Router();
const { createRequest, listRequests, listMine, acceptRequest, confirmRequest } = require('../controllers/tutoringController');
const { requireAuth } = require('../middleware/auth');

router.post('/', requireAuth, createRequest);
router.get('/', requireAuth, listRequests);
router.get('/mine', requireAuth, listMine);
router.post('/:id/accept', requireAuth, acceptRequest);
router.post('/:id/confirm', requireAuth, confirmRequest);

module.exports = router;