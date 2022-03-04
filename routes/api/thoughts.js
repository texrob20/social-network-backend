const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get (getAllThoughts)
  .post(addThought);

// /api/thoughts/:userId/:thoughtId
router
  .route('/:thoughtId')
  .put(updateThought)
  .delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post (addReaction)
  .delete(removeReaction);  

module.exports = router;