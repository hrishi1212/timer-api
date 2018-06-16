'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TimerSchema = new Schema({
  time: {
    type: String,
    required: 'Kindly enter the time'
  },
  Description:{
    type: String,
    required: 'Kindly enter the Description',
  },
  startDate:{
    type: Date,
    
  },
  endDate:{
    type: Date,
    
  },
  Created_date: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('Timer', TimerSchema);