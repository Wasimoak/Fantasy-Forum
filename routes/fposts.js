const express = require('express');
const router = express.Router();
const fpostsCtrl = require('../controllers/fposts');

router.get('/', fpostsCtrl.index);
router.get('/new', fpostsCtrl.new);
router.get('/:id', fpostsCtrl.show);
router.post('/', fpostsCtrl.create);
router.post('/:id', fpostsCtrl.update);
router.post('/:id/delete', fpostsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
