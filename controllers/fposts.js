const Fpost = require('../models/fposts');
const User = require('../models/user')

module.exports = {
  index,
  show,
  new: newFpost,
  create,
  update,
  delete: deleteFpost
};

async function index(req, res) {
  console.log(req.user)
  let allUser = await User.find({})
  let fposts = await Fpost.find({})
  console.log(allUser)
 try{
res.render('fposts/index', {user: req.user, fposts})
 }catch(err){
  console.log(err)
 } 
}


async function show(req, res) {
  let fpost = await Fpost.findById(req.params.id)
      res.render('fposts/show', {fpost});
    };

function newFpost(req, res) {
  res.render('fposts/new', { title: 'Add Post'});
}

function create(req, res) {
  const fpost = new Fpost(req.body);
  fpost.save(function(err) {
    if (err) return res.redirect('/fposts/new');
    res.redirect(`/fposts/${fpost._id}`);
  });
}
async function update(req, res) {
await Fpost.findByIdAndUpdate(req.params.id, req.body)
res.redirect('/fposts')
}

async function deleteFpost (req, res, next) {
  try{
    await Fpost.findByIdAndDelete(req.params.id)
  res.redirect('/fposts');
  }catch(err) {
    res.redirect('fposts')
  }
}
