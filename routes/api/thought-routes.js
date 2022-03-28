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



// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:UserId/:thoughtId')
  .put(createReaction)
  .delete(removeThought);

// /api/thought/userId/thoughtId/reactionId  
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;