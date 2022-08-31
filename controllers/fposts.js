const Fpost = require('../models/fposts');

module.exports = {
  index,
  show,
  new: newFpost,
  create
};

function index(req, res) {
  Fpost.find({}, function(err, fposts) {
    res.render('fposts/index', { title: 'All Post', fposts });
  });
}

function show(req, res) {
  Fpost.findById(req.params.id)
      res.render('fposts/show');
    };

function newFpost(req, res) {
  res.render('fposts/new', { title: 'Add Post' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const fpost = new Fpost(req.body);
  fpost.save(function(err) {
    if (err) return res.redirect('/fposts/new');
    // res.redirect('/fposts');
    res.redirect(`/fposts/${fpost._id}`);
  });
}
