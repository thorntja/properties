var Property = require('../models/Property');

module.exports = {

  find: function(params, callback){
    Property.find(params, function(err, properties){
      if(err){
        callback(err, null); //error, payload  -- error means no payload so payload param is empty
        return;
      }

      callback(null, properties);
    })
  },

  findById: function(id, callback){
    Property.findById(id, function(err, property){
      if(err){
        callback(err, null);
        return;
      }

      callback(null, property);
    })
  },

  create: function(params, callback){
    Property.create(params, function(err, property){
      if(err){
        callback(err, null)
        return
      }

      callback(null, property)
    })
  },

  update: function(id, params, callback){
    Property.findByIdAndUpdate(id, params, {new:true}, function(err, property){
      if(err){
        callback(err, null)
        return
      }

      callback(null, property)
    })
  },

  delete: function(id, callback){
    Property.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null)
        return
      }

      callback(null, null)
    })
  }
}
