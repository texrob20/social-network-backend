const { Thought, User } = require('../models');

const thoughtController = {
  // add thought to user
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.pizzaId },
          { $push: { comments: _id } },
          { new: true }
        );
      })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { runValidators: true, new: true }
    )
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

// remove comment
removeThought({ params }, res) {
  Thought.findOneAndDelete({ _id: params.commentId })
    .then(deletedComment => {
      if (!deletedComment) {
        return res.status(404).json({ message: 'No comment with this id!' });
      }
      return Pizza.findOneAndUpdate(
        { _id: params.pizzaId },
        { $pull: { comments: params.commentId } },
        { new: true }
      );
    })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id!' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.json(err));
},

// remove reply
removeReply({ params }, res) {
  Comment.findOneAndUpdate(
    { _id: params.commentId },
    { $pull: { replies: { replyId: params.replyId } } },
    { new: true }
  )
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => res.json(err));
}
};

module.exports = commentController;