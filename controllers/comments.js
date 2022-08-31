var Fpost = require('../models/fposts');

module.exports = {
  create
};

function create(req, res) {
  Fpost.findById(req.params.id, function(err, fpost) {
    fpost.comments.push(req.body);
    fpost.save(function(err) {
      res.redirect(`/fposts/${fpost._id}`);
    });
  });
}