const express = require('express');
const router = express.Router();
const fpostsCtrl = require('../controllers/fposts');

router.get('/', fpostsCtrl.index);
router.get('/new', fpostsCtrl.new);
router.get('/:id', fpostsCtrl.show);
router.post('/', fpostsCtrl.create);

module.exports = router;
