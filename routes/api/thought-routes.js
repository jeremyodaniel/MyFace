const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts
//router.route('/').get(getAllThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:UserId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thought/userId/thoughtId/reactionId  
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;