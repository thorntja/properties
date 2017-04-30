var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
  address: {type:String, default:''},
  description: {type:String, default:''},
  br: {type:Number},
  ba: {type:Number},
  rent: {type:Number},
  pet: {type:Boolean, default:false},
  smoking: {type:Boolean, default:false},
  img: {type:String, default:''}
});

module.exports = mongoose.model('PropertySchema', PropertySchema);
