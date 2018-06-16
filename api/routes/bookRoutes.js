'use strict';
module.exports = function(app) {
  var bookTime = require('../controllers/bookController');

  // bookTime Routes
  app.route('/timer')
    .get(bookTime.list_all_tasks)
    .post(bookTime.create_a_task);
};
