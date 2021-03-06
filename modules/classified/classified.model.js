const mongoose = require('mongoose');

const ClassifiedSchema = mongoose.Schema({
   title: String,
   price: Number,
   area: Number,
   content: String,
   category: String,
   requirement: {
      type: String,
   },
   address: String,
   images: [{
      type: String
   }],
   status: {
      type: Number,
      default: 0 //0: pending, 1: approved, 2 refuse
   },
   id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   level: {
      type: Number,  
      default: 1     //1: normal 2: vip...
   },
   time_created: {
      type: Date,
      default: Date.now
   },
   time_approved: {
      type: Date,
      default: null
   },
   last_modified:{
      type: Date,
      default: Date.now
   },
   time_post: Number,
});

module.exports = mongoose.model("Classified", ClassifiedSchema);