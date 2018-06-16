'use strict';


var mongoose = require('mongoose'),
  Timers = mongoose.model('Timer');

exports.list_all_tasks = function(req, res) {
  Timers.find({}, function(err, timer) {
    if (err)
      res.send(err);
    res.json(timer);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Timers(req.body);
  new_task.save(function(err, timer) {
    if (err)
      res.send(err);
    res.json(timer);
  });
};

