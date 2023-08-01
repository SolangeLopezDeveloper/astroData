const { index } = require('../controllers/mainController');
const router = require('express').Router();


/* GET home page. */
router.get('/', index);

module.exports = router;
