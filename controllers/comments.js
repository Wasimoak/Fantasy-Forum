var Fpost = require('../models/fposts');

module.exports = {
  create,
};

async function create(req, res) {
  try{
  let fpost = await Fpost.findById(req.params.id)
  fpost.comments.push(req.body)
  await fpost.save()
  res.redirect(`/fposts/${req.params.id}`)
  }catch(err){
res.redirect(`/fposts/${req.params.id}`)
  } 
}