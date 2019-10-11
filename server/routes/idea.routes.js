let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let user = require('../models/idea-schema');

router.route('/create').post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) return next(error);
    console.log(data);
    res.json(data);
  });
});

router.route('/').get((req, res) => {
  user.find((error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

module.exports = router;

