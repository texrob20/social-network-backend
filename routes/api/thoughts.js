const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:thoughtId
router
  .route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/:id/reactions')
  .post (addReaction);

router.route('/:id/reactions/:reactionId').delete(removeReaction);  

module.exports = router;