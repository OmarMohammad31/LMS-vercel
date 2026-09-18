const router = require('express').Router();
const { createRequest, listRequests, listMine, acceptRequest, confirmRequest } = require('../controllers/tutoringController');
const { requireAuth } = require('../middleware/auth');
const { runOnce } = require('../services/schedulerService');

// Vercel has no always-running timer, so update request statuses
// each time someone opens their own requests.
async function refreshStatuses(req, res, next) {
  try {
    await runOnce();
  } catch (err) {
    console.error('Scheduler error:', err.message);
  }
  next();
}

router.post('/', requireAuth, createRequest);
router.get('/', requireAuth, listRequests);
router.get('/mine', requireAuth, refreshStatuses, listMine);
router.post('/:id/accept', requireAuth, acceptRequest);
router.post('/:id/confirm', requireAuth, confirmRequest);

module.exports = router;
