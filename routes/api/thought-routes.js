const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction
} = require('../../controllers/thought-controller');


// POST at /api/thoughts/<userId>
router
  .route('/:userId')
  .post(createThought)

// GET at /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

// GET, UPDATE, & DELETE one thought by id at /api/thoughts/id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .put(createReaction)
  //.delete(removeThought);

// /api/thoughts/thoughtId/reactions/reactionId  
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);


module.exports = router;